#!/bin/bash

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Variables
COMPOSE_CMD="docker compose"
PROJECT_NAME="hidranix"
COMPOSE_FILE="docker-compose.yml"

# Función para mostrar ayuda
show_help() {
    echo -e "${GREEN}Uso: ./run.sh [comando]${NC}"
    echo ""
    echo -e "${BLUE}Comandos disponibles:${NC}"
    echo -e "  ${GREEN}up${NC}           - Iniciar servicios en segundo plano"
    echo -e "  ${GREEN}up-dev${NC}       - Iniciar servicios en primer plano (modo desarrollo)"
    echo -e "  ${GREEN}down${NC}         - Detener y eliminar contenedores"
    echo -e "  ${GREEN}stop${NC}         - Detener servicios sin eliminar contenedores"
    echo -e "  ${GREEN}start${NC}        - Iniciar servicios detenidos"
    echo -e "  ${GREEN}restart${NC}      - Reiniciar servicios"
    echo -e "  ${GREEN}build${NC}        - Construir imágenes sin iniciar"
    echo -e "  ${GREEN}rebuild${NC}      - Reconstruir imágenes y iniciar"
    echo -e "  ${GREEN}logs${NC}         - Mostrar logs de todos los servicios"
    echo -e "  ${GREEN}logs-backend${NC} - Mostrar logs del backend"
    echo -e "  ${GREEN}logs-frontend${NC} - Mostrar logs del frontend"
    echo -e "  ${GREEN}logs-db${NC}      - Mostrar logs de la base de datos"
    echo -e "  ${GREEN}ps${NC}           - Mostrar estado de los contenedores"
    echo -e "  ${GREEN}exec-backend${NC} - Ejecutar comando en el backend"
    echo -e "  ${GREEN}exec-frontend${NC} - Ejecutar comando en el frontend"
    echo -e "  ${GREEN}exec-db${NC}      - Ejecutar comando en la base de datos"
    echo -e "  ${GREEN}clean${NC}        - Eliminar contenedores, imágenes, volúmenes y redes"
    echo -e "  ${GREEN}stats${NC}        - Mostrar estadísticas de uso de recursos"
    echo -e "  ${GREEN}help${NC}         - Mostrar esta ayuda"
    echo ""
    echo -e "${YELLOW}Ejemplos:${NC}"
    echo -e "  ${GREEN}./run.sh up${NC}"
    echo -e "  ${GREEN}./run.sh logs -f${NC}"
    echo -e "  ${GREEN}./run.sh exec-backend bash${NC}"
}

# Función para verificar si Docker está ejecutándose
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        echo -e "${RED}Error: Docker no está ejecutándose. Inicia Docker primero.${NC}"
        exit 1
    fi
}

# Comandos principales
case "$1" in
    "up")
        check_docker
        echo -e "${GREEN}Iniciando servicios en segundo plano...${NC}"
        $COMPOSE_CMD -f $COMPOSE_FILE up -d
        ;;
    
    "up-dev")
        check_docker
        echo -e "${GREEN}Iniciando servicios en modo desarrollo (primer plano)...${NC}"
        $COMPOSE_CMD -f $COMPOSE_FILE up
        ;;
    
    "down")
        echo -e "${YELLOW}Deteniendo y eliminando contenedores...${NC}"
        $COMPOSE_CMD -f $COMPOSE_FILE down
        ;;
    
    "stop")
        echo -e "${YELLOW}Deteniendo servicios...${NC}"
        $COMPOSE_CMD -f $COMPOSE_FILE stop
        ;;
    
    "start")
        check_docker
        echo -e "${GREEN}Iniciando servicios detenidos...${NC}"
        $COMPOSE_CMD -f $COMPOSE_FILE start
        ;;
    
    "restart")
        echo -e "${YELLOW}Reiniciando servicios...${NC}"
        $COMPOSE_CMD -f $COMPOSE_FILE restart
        ;;
    
    "build")
        check_docker
        echo -e "${GREEN}Construyendo imágenes...${NC}"
        $COMPOSE_CMD -f $COMPOSE_FILE build
        ;;
    
    "rebuild")
        check_docker
        echo -e "${GREEN}Reconstruyendo imágenes e iniciando servicios...${NC}"
        $COMPOSE_CMD -f $COMPOSE_FILE up -d --build
        ;;
    
    "logs")
        shift
        $COMPOSE_CMD -f $COMPOSE_FILE logs "$@"
        ;;
    
    "logs-backend")
        shift
        $COMPOSE_CMD -f $COMPOSE_FILE logs backend "$@"
        ;;
    
    "logs-frontend")
        shift
        $COMPOSE_CMD -f $COMPOSE_FILE logs frontend "$@"
        ;;
    
    "logs-db")
        shift
        $COMPOSE_CMD -f $COMPOSE_FILE logs mysql-db "$@"
        ;;
    
    "ps")
        $COMPOSE_CMD -f $COMPOSE_FILE ps
        ;;
    
    "exec-backend")
        shift
        if [ $# -eq 0 ]; then
            echo -e "${YELLOW}Ejecutando shell interactiva en el backend...${NC}"
            $COMPOSE_CMD -f $COMPOSE_FILE exec backend sh
        else
            $COMPOSE_CMD -f $COMPOSE_FILE exec backend "$@"
        fi
        ;;
    
    "exec-frontend")
        shift
        if [ $# -eq 0 ]; then
            echo -e "${YELLOW}Ejecutando shell interactiva en el frontend...${NC}"
            $COMPOSE_CMD -f $COMPOSE_FILE exec frontend sh
        else
            $COMPOSE_CMD -f $COMPOSE_FILE exec frontend "$@"
        fi
        ;;
    
    "exec-db")
        shift
        if [ $# -eq 0 ]; then
            echo -e "${YELLOW}Conectando a la base de datos MySQL...${NC}"
            $COMPOSE_CMD -f $COMPOSE_FILE exec mysql-db mysql -u appuser -papppassword hidranix
        else
            $COMPOSE_CMD -f $COMPOSE_FILE exec mysql-db "$@"
        fi
        ;;
    
    "clean")
        echo -e "${RED}⚠️  Eliminando TODOS los recursos de Docker...${NC}"
        read -p "¿Estás seguro? Esto eliminará contenedores, imágenes, volúmenes y redes. (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${YELLOW}Eliminando contenedores...${NC}"
            docker rm -f $(docker ps -aq) 2>/dev/null || true
            
            echo -e "${YELLOW}Eliminando imágenes...${NC}"
            docker rmi -f $(docker images -aq) 2>/dev/null || true
            
            echo -e "${YELLOW}Eliminando volúmenes...${NC}"
            docker volume rm -f $(docker volume ls -q) 2>/dev/null || true
            
            echo -e "${YELLOW}Eliminando redes...${NC}"
            docker network rm $(docker network ls -q) 2>/dev/null || true
            
            echo -e "${GREEN}Limpieza completada.${NC}"
        else
            echo -e "${YELLOW}Limpieza cancelada.${NC}"
        fi
        ;;
    
    "stats")
        echo -e "${BLUE}Estadísticas de contenedores:${NC}"
        docker stats --no-stream 2>/dev/null || echo "No se pueden mostrar estadísticas"
        
        echo -e "\n${BLUE}Uso de disco:${NC}"
        docker system df
        ;;
    
    "help"|"")
        show_help
        ;;
    
    *)
        echo -e "${RED}Comando no reconocido: $1${NC}"
        echo -e "Usa ${GREEN}./run.sh help${NC} para ver los comandos disponibles."
        exit 1
        ;;
esac

# Mostrar estado final para comandos que inician/detienen servicios
case "$1" in
    "up"|"up-dev"|"start"|"restart"|"rebuild")
        echo -e "\n${GREEN}✅ Estado final de los contenedores:${NC}"
        $COMPOSE_CMD -f $COMPOSE_FILE ps
        ;;
    
    "down"|"stop")
        echo -e "\n${YELLOW}📋 Contenedores en ejecución:${NC}"
        docker ps
        ;;
esac
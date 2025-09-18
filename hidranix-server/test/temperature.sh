# #!/bin/bash

# URL="http://localhost:5000/iot/temperature"
# USER_ID="df2c8462-330f-4710-8834-c3b8cb29d2b5"

# for i in {1..10}; do
#   # Generar un número aleatorio entre 10 y 35 (puedes ajustar este rango)
#   random_temp=$(echo "scale=1; 10 + $((RANDOM % 250)) / 10" | bc)

#   # Crear el cuerpo de la petición JSON
#   BODY=$(jq -n --arg temp "$random_temp" --arg userId "$USER_ID" '{temperature: ($temp | tonumber), userId: $userId}')

#   # Enviar la petición POST con curl
#   curl -X POST -H "Content-Type: application/json" -d "$BODY" "$URL"

#   echo "Petición $i enviada con temperatura: $random_temp"

#   # Esperar 5 segundos
#   sleep 5
# done

# echo "Se enviaron las 10 peticiones."

#!/bin/bash

USER_ID="18f602e0-b79c-4e7f-9ea3-48d8dbc97c1d"

for i in {1..100}
do
  TEMP=$(( RANDOM % 21 + 10 ))  # genera un número aleatorio entre 10 y 30
  echo "Enviando solicitud $i con temperatura: $TEMP °C"

  # curl -s -X POST https://hidranix-server-950726162533.southamerica-west1.run.app/iot/temperature \
  curl -s -X POST https://fzpfpmr3-5000.brs.devtunnels.ms/iot/temperature \
    -H "Content-Type: application/json" \
    -d "{\"temperature\": $TEMP, \"userId\": \"$USER_ID\"}"

  sleep 5 # esperar 2 segundos
  echo ""  # salto de línea para legibilidad
done

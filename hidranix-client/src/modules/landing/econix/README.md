# Econix Platform - Documentación

## Descripción General

Econix es una plataforma educativa especializada en hidrógeno verde y energías sostenibles. La aplicación está construida en React y cuenta con un sistema modular para gestionar webinars y cursos especializados.

## Estructura Principal

La plataforma se compone de dos elementos principales:
- **Webinars**: Eventos educativos en línea
- **Cursos**: Programas formativos estructurados con múltiples módulos

## 📚 Componentes e interfaces

### Webinars

#### Interfaz WebinarItemContent
```typescript
export interface WebinarItemContent {
  id?: string;
  title: string;
  date: string;
  time: string;
  description: string;
  speaker: {
    name: string;
    title: string;
    bio: string;
  };
  link: string;
  isFree: boolean;
  platform: string;
  organizer: string;
  extraNotes?: string;
  imgSrc: string;
}
```

#### Componente ListWebinar
Renderiza la lista de webinars en el landing page:
```jsx
<ListWebinar
  id="webinars"
  webinars={webinars}
  title="Webinars"
  subTitle="Únete a nuestros webinars"
/>
```

### Cursos

#### Interfaz CourseItemContent (Overview)
```typescript
interface CourseItemContent {
  name: string;
  startDate: string;
  endDate: string;
  duration: string;
  modality: string;
  schedule: string;
  moreInfoPath: string;
}
```

#### Componente ListCourse
Muestra el resumen de cursos disponibles:
```jsx
<ListCourse
  id="cursos"
  title="Nuestros Cursos"
  subTitle="Capacítate con nuestros programas especializados"
  courses={courses} // tipo CourseItemContent[]
/>
```

#### Interfaz CourseData (Detalle completo, usado en cada página especifica de cada curso)
```typescript
export interface CourseData {
  title: string;
  courseCode: string;
  duration: string;
  modality: string;
  startDate: string; // formato: "dd/mm/yyyy"
  endDate: string;
  schedule: string;
  sessions: string;
  weeks: string;
  hoursPerWeek: string;
  objective: string;
  methodology: string[];
  dirigidoA: string[];
  modules: Module[];
  investment: Investment;
  instructorInfo: InstructorInfo;
  benefits: string[];
  silaboPdf: string;
}
```

#### Interfaces de Apoyo

**Module**
```typescript
export interface Module {
  number: number;
  title: string;
  sessions: string;
  hours: number;
  week: number;
  dates: string[]; // e.g. ["Martes 2 de septiembre", ...]
  objective: string;
  topics: string[];
}
```

**Investment**
```typescript
export interface Investment {
  regular: number;
  earlyBird: number;
  earlyBirdDeadline: string; // formato: "dd/mm/yyyy"
}
```

**InstructorInfo**
```typescript
export interface InstructorInfo {
  company: string;
  description: string;
  contact: string;
  email: string;
}
```

## 🎯 Cómo Agregar Nuevo Contenido

### Agregar Webinars al Landing

1. Localiza el array `webinars` en el landing page
2. Agrega un nuevo objeto siguiendo la interfaz `WebinarItemContent`:

```typescript
const newWebinar: WebinarItemContent = {
  title: "Título del Webinar",
  date: "2024-03-15",
  time: "19:00",
  description: "Descripción del webinar...",
  speaker: {
    name: "Nombre del Experto",
    title: "Cargo del Experto",
    bio: "Biografía del experto..."
  },
  link: "https://zoom.us/meeting-link",
  isFree: true,
  platform: "Zoom",
  organizer: "Econix",
  imgSrc: "/path/to/webinar/image.jpg"
};

// Agrega al array existente
const webinars = [...existingWebinars, newWebinar];
```

### Agregar Cursos al Landing

1. Localiza el array `courses` en el landing page
2. Agrega un nuevo curso:

```typescript
const newCourse: CourseItemContent = {
  name: "Nombre del Nuevo Curso",
  startDate: "16/09/2025",
  endDate: "28/10/2025",
  duration: "36 horas",
  modality: "Online",
  schedule: "Martes y jueves 7:30 p.m. - 10:00 p.m.",
  moreInfoPath: "/cursos/ruta-del-nuevo-curso"
};

// Agrega al array existente
const courses = [...existingCourses, newCourse];
```

## 🛣️ Crear Nueva Página de Curso

### 1. Crear el Archivo de Datos del Curso

Crea un archivo con los datos del curso siguiendo la interfaz `CourseData`:

```typescript
// data/courseH2V003.ts
export const courseH2V003: CourseData = {
  title: "Nuevo Curso de Hidrógeno Verde",
  courseCode: "H2V003",
  duration: "40 horas",
  modality: "Online",
  startDate: "01/10/2025",
  endDate: "15/11/2025",
  schedule: "Lunes y miércoles 7:00 p.m. - 9:30 p.m.",
  sessions: "16 sesiones",
  weeks: "8 semanas",
  hoursPerWeek: "5 horas",
  objective: "Objetivo del curso...",
  methodology: [
    "Clases teóricas virtuales",
    "Talleres prácticos",
    "Casos de estudio"
  ],
  dirigidoA: [
    "Ingenieros energéticos",
    "Profesionales del sector",
    "Estudiantes avanzados"
  ],
  modules: [
    {
      number: 1,
      title: "Introducción al Hidrógeno Verde",
      sessions: "4 sesiones",
      hours: 10,
      week: 1,
      dates: ["Lunes 1 de octubre", "Miércoles 3 de octubre"],
      objective: "Comprender los fundamentos...",
      topics: [
        "Historia del hidrógeno",
        "Propiedades físicas",
        "Aplicaciones actuales"
      ]
    }
    // ... más módulos
  ],
  investment: {
    regular: 800,
    earlyBird: 680,
    earlyBirdDeadline: "20/09/2025"
  },
  instructorInfo: {
    company: "Empresa del Instructor",
    description: "Descripción del instructor...",
    contact: "+51916699070",
    email: "instructor@email.com"
  },
  benefits: [
    "Certificado de participación",
    "Material didáctico",
    "Acceso a grabaciones"
  ],
  silaboPdf: "/path/to/syllabus.pdf"
};
```

### 2. Crear el Componente de la Página

```typescript
// econix/cursos/course-H2V003/CourseH2V003.tsx
import React, { useEffect } from 'react';
import { NavBarEconix } from '../components/NavBarEconix';
import { CourseHero } from '../components/CourseHero';
import { CourseInfo } from '../components/CourseInfo';
import { CourseModules } from '../components/CourseModules';
import { CourseDetails } from '../components/CourseDetails';
import { CourseInvestment } from '../components/CourseInvestment';
import { CourseRegistration } from '../components/CourseRegistration';
import { Footer } from '../components/Footer';
import { WhatsAppCTAMultiple } from '../components/WhatsAppCTAMultiple';
import { courseH2V003 } from '../data/courseH2V003';
import { phinixSocialLinks } from '../data/socialLinks';
import { courseContacts } from '../data/contacts';

export const CourseH2V003 = () => {
  useEffect(() => {
    document.title = `${courseH2V003.title} - Econix`;
  }, []);

  return (
    <>
      <NavBarEconix variantColor showTitle title={courseH2V003.title} />
      <CourseHero courseData={courseH2V003} />
      <CourseInfo courseData={courseH2V003} />
      <CourseModules modules={courseH2V003.modules} />
      <CourseDetails courseData={courseH2V003} />
      <CourseInvestment courseData={courseH2V003} />
      <CourseRegistration courseData={courseH2V003} />
      <Footer
        {...phinixSocialLinks}
        slogan="Educación, consultoría y oportunidad de nuevas innovaciones exitosas"
        pageName="Econix"
      />
      <WhatsAppCTAMultiple contacts={courseContacts} />
    </>
  );
};
```

### 3. Agregar la Ruta

Configura la ruta en tu router principal:

```typescript
// App.tsx 
<Route 
  path="/cursos/nuevo-curso-hidrogeno" 
  component={CourseH2V003} 
/>
```

## 🚀 Componentes Adicionales

### WhatsAppCTAMultiple

Botón flotante de WhatsApp que permite contactar múltiples asesores:

```typescript
// Interfaz Contact
interface Contact {
  name: string;
  number: string;
  message: string;
}

// Uso del componente
const courseContacts: Contact[] = [
  {
    name: "Asesor Académico",
    number: "+51999999999",
    message: "Hola, me gustaría obtener más información sobre el curso de Hidrógeno Verde..."
  },
  {
    name: "Asesor Comercial",
    number: "+51999999998",
    message: "Consulta sobre precios y modalidades de pago..."
  }
];

<WhatsAppCTAMultiple contacts={courseContacts} />
```

**Características:**
- Botón flotante reutilizable
- Múltiples contactos disponibles
- Mensaje personalizable por contacto
- Abre WhatsApp Web/App automáticamente
- Formatea números automáticamente

## 📝 Convenciones y Buenas Prácticas

### Nomenclatura de Archivos
- Cursos: `CourseH2V00X.tsx` donde X es el número secuencial
- Datos: `courseH2V00X.ts` para los datos del curso
- Rutas: `/cursos/nombre-descriptivo-del-curso`

### Formatos de Fecha
- Siempre usar formato "dd/mm/yyyy" para fechas
- Horarios en formato "HH:MM" (24 horas)

### Imágenes
- Almacenar en carpeta `/src/assets/`
- Optimizar para web (formato WebP recomendado)
- Nombrar descriptivamente: `webinar-hidrogeno-verde-2024.webp`

### Contactos de WhatsApp
- Incluir código de país (+51 para Perú)
- Mensajes claros y específicos por curso/webinar
- Mantener actualizada la lista de asesores

## 🔧 Mantenimiento

### Actualizar Fechas de Cursos
1. Modificar en el array del landing (`CourseItemContent`)
2. Actualizar en los datos detallados (`CourseData`)
3. Verificar fechas de early bird en `Investment`

### Agregar Nuevos Módulos
1. Seguir la numeración secuencial
2. Mantener coherencia en fechas y semanas
3. Actualizar el total de horas del curso

### Trabajo futuro: [FUTURE_WORK.md](./FUTURE_WORK.md)

*Última actualización: Septiembre 2025*

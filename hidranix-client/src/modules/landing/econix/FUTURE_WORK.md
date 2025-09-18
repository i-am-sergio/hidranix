# Econix Platform - Escalamiento Backend

## 🚀 Visión General

Este documento describe la hoja de ruta para escalar la plataforma Econix de un sistema estático en React a una aplicación full-stack con backend en Node.js, base de datos y sistema de notificaciones automatizadas.

## 🎯 Objetivos del Escalamiento

### Funcionalidades Principales
- **Gestión Dinámica**: Administración de webinars y cursos desde panel administrativo
- **Registro de Usuarios**: Sistema de inscripciones y seguimiento de participantes
- **Notificaciones Automáticas**: Emails programados para recordatorios y actualizaciones
- **Contenido Dinámico**: CMS para gestionar contenido sin intervención técnica

## 🏗️ Arquitectura Propuesta

```
Frontend (React)          Backend (Node.js)         Database (MySQL)
├── User Views            ├── REST API              ├── Users
├── Admin Panel          ├── Authentication        ├── Webinars
├── Registration         ├── Email Service         ├── Courses
└── Dashboard            ├── Job Scheduler         ├── Enrollments
                         └── File Management       └── Notifications
```

## 📊 Modelo Entidad-Relación

### Entidades Principales

#### 1. Users
```sql
users
├── id (PK)
├── email (UNIQUE)
├── first_name
├── last_name
├── phone
├── company
├── position
├── role (admin|user)
├── created_at
├── updated_at
└── deleted_at
```

#### 2. Webinars
```sql
webinars
├── id (PK)
├── title
├── description
├── date
├── time
├── duration_minutes
├── platform
├── meeting_link
├── is_free
├── max_participants
├── status (draft|published|completed|cancelled)
├── image_url
├── speaker_id (FK)
├── organizer_id (FK)
├── extra_notes
├── created_at
├── updated_at
└── deleted_at
```

#### 3. Speakers
```sql
speakers
├── id (PK)
├── name
├── title
├── bio
├── company
├── email
├── linkedin_url
├── profile_image_url
├── created_at
├── updated_at
└── deleted_at
```

#### 4. Courses
```sql
courses
├── id (PK)
├── title
├── course_code (UNIQUE)
├── description
├── objective
├── duration_hours
├── total_sessions
├── weeks
├── hours_per_week
├── modality (online|presential|hybrid)
├── schedule
├── start_date
├── end_date
├── max_students
├── status (draft|published|in_progress|completed|cancelled)
├── syllabus_pdf_url
├── instructor_id (FK)
├── regular_price
├── early_bird_price
├── early_bird_deadline
├── created_at
├── updated_at
└── deleted_at
```

#### 5. Course Modules
```sql
course_modules
├── id (PK)
├── course_id (FK)
├── module_number
├── title
├── objective
├── sessions_count
├── hours
├── week_number
├── start_date
├── end_date
├── created_at
├── updated_at
└── deleted_at
```

#### 6. Module Topics
```sql
module_topics
├── id (PK)
├── module_id (FK)
├── topic_order
├── topic_name
├── created_at
└── updated_at
```

#### 7. Module Sessions
```sql
module_sessions
├── id (PK)
├── module_id (FK)
├── session_date
├── session_name
├── duration_hours
├── created_at
└── updated_at
```

#### 8. Instructors
```sql
instructors
├── id (PK)
├── name
├── company
├── description
├── contact_phone
├── email
├── profile_image_url
├── linkedin_url
├── created_at
├── updated_at
└── deleted_at
```

#### 9. Webinar Registrations
```sql
webinar_registrations
├── id (PK)
├── webinar_id (FK)
├── user_id (FK)
├── registration_date
├── attended
├── feedback_rating
├── feedback_comment
├── created_at
└── updated_at
```

#### 10. Course Enrollments
```sql
course_enrollments
├── id (PK)
├── course_id (FK)
├── user_id (FK)
├── enrollment_date
├── payment_status (pending|confirmed|failed)
├── amount_paid
├── payment_method
├── completion_percentage
├── certificate_issued
├── created_at
└── updated_at
```

#### 11. Email Notifications
```sql
email_notifications
├── id (PK)
├── user_id (FK)
├── webinar_id (FK|NULL)
├── course_id (FK|NULL)
├── email_type (reminder|confirmation|update|certificate)
├── subject
├── content
├── scheduled_at
├── sent_at
├── status (pending|sent|failed)
├── created_at
└── updated_at
```

### Relaciones

```
Users ||--o{ Webinar_Registrations
Users ||--o{ Course_Enrollments
Users ||--o{ Email_Notifications

Webinars ||--o{ Webinar_Registrations
Webinars }o--|| Speakers
Webinars }o--|| Users (organizer)

Courses ||--o{ Course_Enrollments
Courses ||--o{ Course_Modules
Courses }o--|| Instructors

Course_Modules ||--o{ Module_Topics
Course_Modules ||--o{ Module_Sessions

Speakers ||--o{ Webinars
Instructors ||--o{ Courses

```
*| Nota 1: Existen relaciones de muchos a muchos por lo que es necesario romper las relaciones con tablas intermedias*

*| Nota 2: Este modelo es solo como referencia, no es un modelo final*

## 🖥️ Vistas del Sistema

### Panel Administrativo (Frontend)

#### 1. Dashboard Administrativo
- **Métricas:**
  - Registros por webinar/curso
  - Ingresos generados
  - Participación promedio
  - Próximos eventos

#### 2. Gestión de Webinars
- **Funcionalidades:**
  - CRUD completo de webinars
  - Programación de notificaciones
  - Gestión de speakers
  - Export de listas de participantes

#### 3. Gestión de Cursos
- **Funcionalidades:**
  - CRUD de cursos con builder de módulos
  - Gestión de instructores
  - Control de matrículas y pagos (considerar viabilidad)
  - Seguimiento de progreso estudiantil
  - Emisión de certificados

#### 4. Gestión de Usuarios
- **Funcionalidades:**
  - Lista de usuarios registrados
  - Modificar usuarios
  - Exportar usuarios

#### 5. Sistema de Notificaciones (considerar viabilidad, es posible que solo enviar un correo de confirmación automático sea suficiente y no realizar todo un sistema de notificaciones) 
- **Funcionalidades:**
  - Programación de envíos automáticos
  - Historial de notificaciones enviadas

*| Nota: Realizar una definición más exacta en función al MER final definido y validado por los stakeholders principales*

## ⚡ Backend - Lineamientos de Implementación

### 1. Estructura de Directorios
```
src/
├── controllers/
│   ├── webinars.controller.js
│   ├── courses.controller.js
│   ├── users.controller.js
│   └── notifications.controller.js
├── models/
│   ├── User.js
│   ├── Webinar.js
│   ├── Course.js
│   └── Notification.js
├── routes/
│   ├── api.js
│   ├── webinars.routes.js
│   └── courses.routes.js
├── services/
│   ├── emailService.js
│   ├── jobScheduler.js
│   └── fileUpload.js
├── middleware/
│   ├── auth.js
│   └── validation.js
└── jobs/
    ├── webinarReminders.js
    └── courseNotifications.js
```

### 2. APIs Principales

#### Webinars API
```javascript
// Endpoints principales
GET    /api/webinars                    // Lista pública
POST   /api/webinars                    // Crear (admin)
GET    /api/webinars/:id               // Detalle
PUT    /api/webinars/:id               // Actualizar (admin)
DELETE /api/webinars/:id               // Eliminar (admin)
POST   /api/webinars/:id/register      // Registrarse
GET    /api/webinars/:id/attendees     // Lista participantes (admin)
```

#### Courses API
```javascript
// Endpoints principales
GET    /api/courses                    // Lista pública
POST   /api/courses                    // Crear (admin)
GET    /api/courses/:id               // Detalle con módulos
PUT    /api/courses/:id               // Actualizar (admin)
POST   /api/courses/:id/enroll        // Matricularse
GET    /api/courses/:id/students      // Lista estudiantes (admin)
```

### 3. Integración Frontend-Backend

#### Ejemplo de Integración - Lista de Webinars

**Backend Controller (webinars.controller.js)**
```javascript
// Definir de manera más exacta en función al MER final definido
// Código de ejemplo, realizar implementación final considerando las tecnologías a usar
const getWebinars = async (req, res) => {
  try {
    const { status = 'published', upcoming = true } = req.query;
    
    const webinars = await Webinar.findAll({
      where: {
        status,
        ...(upcoming && { date: { [Op.gte]: new Date() } })
      },
      include: [
        { model: Speaker, as: 'speaker' },
        { model: User, as: 'organizer' }
      ],
      order: [['date', 'ASC']]
    });

    res.json({
      success: true,
      data: webinars
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching webinars'
    });
  }
};
```

**Frontend Service (webinarService.js)**
```javascript
// service/webinarService.js
// Considerar el uso de TanStack query
export const webinarService = {
  async getWebinars() {
    const response = await fetch('/api/webinars');
    const data = await response.json();
    return data.success ? data.data : [];
  },

  async registerForWebinar(webinarId, userData) {
    const response = await fetch(`/api/webinars/${webinarId}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      },
      body: JSON.stringify(userData)
    });
    return response.json();
  }
};
```

**Frontend Component Update**
```javascript
// Actualizar ListWebinar component
const ListWebinar = ({ title, subTitle }) => {
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const data = await webinarService.getWebinars();
        setWebinars(data);
      } catch (error) {
        console.error('Error loading webinars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();
  }, []);

  if (loading) return <div>Cargando webinars...</div>;

  return (
    <>
        //...
        <ListWebinar
            id="webinars"
            webinars={webinars}
            title="Webinars"
            subTitle="Únete a nuestros webinars"
        />
        //...
    </>
  );
};
```

## 📧 Sistema de Notificaciones

### 1. Configuración NodeMailer + Gmail

**Email Service Setup**
```javascript
// services/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

const sendWebinarReminder = async (user, webinar) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: user.email,
    subject: `Recordatorio: ${webinar.title} - Mañana a las ${webinar.time}`,
    html: generateWebinarReminderTemplate(user, webinar)
  };

  await transporter.sendMail(mailOptions);
};
```

### 2. Jobs Automáticos

#### Webinar Reminders Job
```javascript
// jobs/webinarReminders.js
// Ejecutar diariamente a las 9:00 AM (ejemplo de cron job, considerar la viabilidad de la implementación de esta feature)
cron.schedule('0 9 * * *', async () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const upcomingWebinars = await Webinar.findAll({
    where: {
      date: {
        [Op.gte]: tomorrow.toISOString().split('T')[0],
        [Op.lt]: new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      }
    },
    include: [{ model: WebinarRegistration, include: [User] }]
  });

  for (const webinar of upcomingWebinars) {
    for (const registration of webinar.registrations) {
      await emailService.sendWebinarReminder(registration.user, webinar);
      
      // Registrar notificación enviada
      await EmailNotification.create({
        user_id: registration.user.id,
        webinar_id: webinar.id,
        email_type: 'reminder',
        subject: `Recordatorio: ${webinar.title}`,
        sent_at: new Date(),
        status: 'sent'
      });
    }
  }
});
```

### 3. Templates de Email

#### Tipos de Notificaciones
- **Confirmación de Registro**: Webinar/Curso registrado exitosamente
- **Recordatorio 24h**: Un día antes del webinar
- **Recordatorio 1h**: Una hora antes del webinar
- **Link de Acceso**: 15 minutos antes con link directo

## 🛠️ Consideraciones Técnicas

### Stack tecnológico en uso (sujeto a cambios según necesidades)
- **Backend**: Node.js + Express.js
- **Base de Datos**: MySQL + Sequelize ORM
- **Jobs**: node-cron
- **Email**: Nodemailer + Gmail API
- **File Upload**: Multer (considerar otras opciones)
- **Autenticación**: Se estaba usando la librería Clerk, considerar la continuidad de su uso

### Uso de Gmail API
- Para usar este servicio es necesario tener una cuenta de gmail con verificacion en 2 pasos y generar una contraseña de aplicación y estas credenciales son las que se colocan en el ENV para el su uso con NodeMailer
- Documentaicón sobre contraseñas de aplicación: [https://support.google.com/accounts/answer/185833?hl=es-419](https://support.google.com/accounts/answer/185833?hl=es-419)

---
*Este documento tiene como objetivo tenerlo como referencia, si existen modifcaciones requeridas se deberán de realizar en base a los nuevos requerimientos propuestos*

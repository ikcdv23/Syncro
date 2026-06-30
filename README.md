# Syncro
Una plataforma web de gestión ágil de proyectos diseñada para equipos. Su núcleo herramientas de gestión como un tablero Kanban colaborativo, calendarios dinámicos y sistema de notificaciones, donde los cambios de estado de las tareas se reflejan en las pantallas de todos los usuarios de forma instantánea y sin latencia.




BASE DE DATOS
// 1. EL USUARIO
model User {
  id            String          @id @default(uuid())
  name          String
  email         String          @unique
  projects      ProjectMember[] // Relación: Proyectos en los que participa
  tasks         Task[]          // Relación: Tareas que tiene asignadas
}

// 2. EL PROYECTO / EQUIPO
model Project {
  id            String          @id @default(uuid())
  name          String     
  description   String?         
  members       ProjectMember[] // Relación: Miembros del proyecto
  tasks         Task[]          // Relación: Tareas del proyecto
}

// 3. LA TABLA INTERMEDIA (¿Quién está en qué proyecto?)
model ProjectMember {
  id            String   @id @default(uuid())
  role          String   @default("MEMBER") // Puede ser "ADMIN" o "MEMBER"
  
  user          User     @relation(fields: [userId], references: [id])
  userId        String
  
  project       Project  @relation(fields: [projectId], references: [id])
  projectId     String
}

// 4. LA TAREA
model Task {
  id            String   @id @default(uuid())
  title         String
  status        String   @default("TODO") // TODO, IN_PROGRESS, DONE
  
  project       Project  @relation(fields: [projectId], references: [id])
  projectId     String
  
  assignee      User?    @relation(fields: [assigneeId], references: [id])
  assigneeId    String?  // Es opcional (?) porque una tarea puede estar sin asignar
}
export interface CourseData {
  title: string;
  courseCode: string;
  duration: string;
  modality: string;
  startDate: string; // formato: "dd/mm/yyyy"
  endDate: string; // formato: "dd/mm/yyyy"
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

export interface InstructorInfo {
  company: string;
  description: string;
  contact: string;
  email: string;
}
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

export interface Investment {
  regular: number;
  earlyBird: number;
  earlyBirdDeadline: string; // formato: "dd/mm/yyyy"
}

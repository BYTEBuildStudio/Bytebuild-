export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  color: string;
  theme: 'dark' | 'light';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: string;
  gradient: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  color: string;
}

export interface Technology {
  name: string;
  category: string;
  icon: string;
  color: string;
}

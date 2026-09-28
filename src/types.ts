export type NavRoute = 'home' | 'skills' | 'projects' | 'experience';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  institution?: string;
  supervisor?: string;
  tools: string[];
  description: string[];
  githubUrl?: string;
  category: 'blockchain' | 'ai_automation' | 'ai_ml' | 'web' | 'networking';
  featured?: boolean;
  stars?: number;
  architectureDetails?: string;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  color: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  tag?: string;
  highlight?: string;
  icon?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'thesis' | 'teaching' | 'education';
  description: string[];
  technologies: string[];
  badge?: string;
  supervisor?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subtitles: string[];
  email: string;
  phone: string;
  location: string;
  github: string;
  githubUrl: string;
  bio: string;
  stats: { label: string; value: string; detail: string }[];
  languages: { name: string; proficiency: string }[];
  softSkills: string[];
}

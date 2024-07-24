import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  icon: LucideIcon;
  name: string;
  domain: string;
  technologies: string[];
  description: string;
  backgroundColor: string;
  textColor: string;
  headerColor: string;
  borderColor: string;
}

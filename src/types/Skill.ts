export type SkillCategory = "LANGUAGE" | "FRONTEND" | "BACKEND" | "DEV_OPS";

export interface Skill {
  id: number;
  name: string;
  category: SkillCategory;
  background_color: string;
  text_color: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  title: string;
  member_count: number;
  project_intro: string;
  start_date: string;
  end_date: string;
  service_link: string;
  logo_url: string;
  md_url: string;
  slug: string;

  created_at: string;
  updated_at: string;

  project_skills: {
    skill_id: number;
    skills: {
      name: string;
    };
  }[];
}

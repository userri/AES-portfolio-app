export interface Career {
  id: number;
  company_id: number;
  position: string;
  start_date: string;
  end_date: string | null;
  created_at: string | null;
  updated_at: string | null;

  companies: {
    company_name: string;
    intro: string;
    logo_url: string;
  } | null;

  skills: {
    skill_id: number;
    skill_name: {
      name: string;
    };
  }[];

  career_descriptions: {
    description_id: number;
    title: string;
    detail: string;
    duration: string;
  }[];
}

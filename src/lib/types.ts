export type ProjectsProps = {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  source_code: string | null;
  demo: string | null;
  techs: [
    {
      id: number;
      name: string;
      image: string;
    }
  ];
};

export type ExperiencesProps = {
  id: number;
  company: string;
  image: string;
  role: string;
  status: string;
  date: string;
};

export type SkillsProps = {
  id: number;
  name: string;
  image: string;
};

export type CertificatesProps = {
  id: number;
  title: string;
  image: string;
  url: string;
  date: string;
  company: string;
  skills: [
    {
      id: number;
      name: string;
      bg_color: string;
      border_color: string;
    }
  ];
};

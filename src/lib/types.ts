export type SummaryProps = {
  name: string;
  role: string;
  summary: string;
  cv_link: string;
};

export type ProjectsProps = {
  id: number;
  slug: string;
  image: string;
  gif: string | null;
  title: string;
  description: string;
  features: [
    {
      id: number;
      emoji: string;
      title: string;
      description: string;
    }
  ];
  source_code: string | null;
  demo: string | null;
  project_name: string | null;
  run_project: string;
  localhost: string;
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
  slug: string;
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

export type GetInTouchProps = {
  title: string;
  text: string;
  socials: [
    {
      id: number;
      name: string;
      link: string;
      icon: string;
      color: string;
    }
  ];
};

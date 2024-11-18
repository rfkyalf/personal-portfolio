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

export type CvContent = {
  title: string;
  location: string;
  summary: string;
  labels: {
    pageTitle: string;
    home: string;
    download: string;
    summary: string;
    skills: string;
    experience: string;
    education: string;
    community: string;
  };
  experience: readonly {
    role: string;
    organization: string;
    place: string;
    period: string;
    highlights: readonly string[];
  }[];
  education: readonly { title: string; place: string }[];
  community: readonly string[];
};

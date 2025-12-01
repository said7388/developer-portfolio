export interface Education {
  id: number;
  title: string;
  duration: string;
  institution: string;
}

export const educations: Education[] = [
  {
    id: 1,
    title: "IT Audit - Master Degree",
    duration: "2017 - 2020",
    institution: "UEES",
  },
  {
    id: 2,
    title: "Business and IT - Bachelor Degree",
    duration: "2007 - 2011",
    institution: "Universidad Técnica Federico Santa María",
  },
];

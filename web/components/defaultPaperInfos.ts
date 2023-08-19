const defaultPaperInfos = [
  {
    id: "1",
    author: "Liang Fu C.",
    title: "Kane Proxity effect of s wave superconductor",
    year: 2007,
    journal: "Physical Review Letters",
    tags: ["topological insulator", "superconductor", "proximity effect"],
    citations: ["2", "3"],
    citedBy: [],
  },
  {
    id: "2",
    author: "Hoge Hoge.",
    title: "hoge hoge",
    year: 2023,
    journal: "Hoge Hoge Journal",
    tags: ["hoge", "fuga"],
    citations: ["3"],
    citedBy: ["1"],
  },
  {
    id: "3",
    author: "Piyo Piyo.",
    title: "piyo piyo",
    year: 2003,
    journal: "PIyo Piyo Journal",
    tags: ["hoge", "piyo"],
    citations: [],
    citedBy: ["1", "2"],
  },
  {
    id: "4",
    author: "Piyo Piyo.",
    title: "piyo piyo",
    year: 2003,
    journal: "PIyo Piyo Journal",
    tags: ["hoge", "piyo"],
    citations: [],
    citedBy: ["1", "2"],
  },
];

export default defaultPaperInfos;

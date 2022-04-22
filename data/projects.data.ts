export type ProjectType = {
  id: string,
  name: string,
  image: string,
  date: string,
  importance: boolean,
  worksDone: string[]
}

export const projects: ProjectType[] = [
  {
    id: "001",
    name: "Ciudad Celeste",
    image: "/assets/projects/CiudadCeleste.png",
    date: "20 ENERO, 2020",
    importance: true,
    worksDone: [
      "Areas verdes",
      "Sistema de riego"
    ]
  },
  {
    id: "002",
    name: "Club Sport Emelect",
    image: "/assets/projects/ClubSportEmelec.png",
    date: "20 ENERO, 2020",
    importance: true,
    worksDone: [
      "Areas verdes",
      "Sistema de riego"
    ]
  },
  {
    id: "003",
    name: "Grupo Pronobis",
    image: "/assets/projects/GrupoPronobis.png",
    date: "20 ENERO, 2020",
    importance: true,
    worksDone: [
      "Areas verdes",
      "Sistema de riego"
    ]
  },
  {
    id: "004",
    name: "La Joya",
    image: "/assets/projects/LaJoya.png",
    date: "20 ENERO, 2020",
    importance: true,
    worksDone: [
      "Areas verdes",
      "Sistema de riego"
    ]
  },
  {
    id: "005",
    name: "La Joya",
    image: "/assets/projects/LaJoya.png",
    date: "20 ENERO, 2020",
    importance: false,
    worksDone: [
      "Areas verdes",
      "Sistema de riego"
    ]
  },
  {
    id: "006",
    name: "La Joya",
    image: "/assets/projects/LaJoya.png",
    date: "20 ENERO, 2020",
    importance: false,
    worksDone: [
      "Areas verdes",
      "Sistema de riego"
    ]
  },
  {
    id: "007",
    name: "Grupo Pronobis",
    image: "/assets/projects/GrupoPronobis.png",
    date: "20 ENERO, 2020",
    importance: false,
    worksDone: [
      "Areas verdes",
      "Sistema de riego"
    ]
  },
]
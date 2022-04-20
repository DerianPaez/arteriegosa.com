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
    date: "",
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
    date: "",
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
    date: "",
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
    date: "",
    importance: true,
    worksDone: [
      "Areas verdes",
      "Sistema de riego"
    ]
  },
]
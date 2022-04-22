export type TeammateType = {
  id: string,
  names: string,
  position: string,
  photo: string,
}

export const team = {
  title: "Nuestro equipo",

  teammates: [
    {
      id: "001",
      names: "Chris Hammer",
      position: "Gerente general",
      photo: "/assets/team/ChrisHammer.png",
    },
    {
      id: "002",
      names: "Elena Bermudez",
      position: "Supervisora",
      photo: "/assets/team/ElenaBermudez.png",
    },
    {
      id: "003",
      names: "Aaron Wallace",
      position: "Supervisor",
      photo: "/assets/team/AaronWallace.png",
    },
    {
      id: "004",
      names: "Juan Brown",
      position: "Supervisor",
      photo: "/assets/team/JuanBrown.png",
    },
  ]
}
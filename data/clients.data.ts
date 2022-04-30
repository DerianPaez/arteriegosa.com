export type ClientType = {
  id: string,
  name: string,
  image: string,
}

export type ClientsType = {
  title: string,
  description: string,
  clientList: ClientType[]
}

export const clients: ClientsType = {
  title: "Nuestros clientes",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  clientList: [
    {
      id: "001",
      name: "Villa del rey",
      image: "/assets/clients/VillaDelRey.png",
    },
    {
      id: "002",
      name: "LFG",
      image: "/assets/clients/LFG.png",
    },
    {
      id: "003",
      name: "Name",
      image: "/assets/clients/CiudadCeleste.png",
    },
    {
      id: "004",
      name: "Name",
      image: "/assets/clients/ClubSportEmelec.png",
    },
    {
      id: "005",
      name: "Name",
      image: "/assets/clients/LaJoya.png",
    },
  ]
}
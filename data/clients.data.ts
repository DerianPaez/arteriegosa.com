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
  description: "Tenemos el privilegio de trabajar con algunas de las marcas más importantes del Ecuador.",
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
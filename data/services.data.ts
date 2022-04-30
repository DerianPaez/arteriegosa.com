
export interface ServiceType {
  id: string,
  name: string,
  description: string,
  icon: string
}

export type ServicesType = {
  title: string,
  text: string,
  servicesList: ServiceType[]
}

export const services: ServicesType = {
  title: "Nuestros Servicios",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  servicesList: [
    {
      id: "001",
      name: "Asesoría",
      description: "Atención en sus inquietudes y necesidades aclarando los conceptos que debe tener para iniciar su proyecto",
      icon: "Advisory"
    },
    {
      id: "002",
      name: "Diseño",
      description: "Estudio que contenga la solución tecnológica adecuada para suplir las necesidades hídricas de su proyecto.",
      icon: "Design"
    },
    {
      id: "003",
      name: "Mantenimiento",
      description: "Contamos con los recursos necesarios para efectuar el montaje de cada uno de los proyectos diseñados, de igual forma Ofrecemos servicios de mantenimiento preventivo y correctivo.",
      icon: "Maintenance"
    },
    {
      id: "004",
      name: "Suministro",
      description: "Gracias a la alianza comercial y técnica con RainBird Internacional, estamos en capacidad de ofrecer totalmente los suministros específicamente calculados y diseñados para su proyecto de riego de áreas Verdes. ",
      icon: "Supply"
    },
  ]
}
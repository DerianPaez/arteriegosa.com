
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
  text: "Nos enorgullecemos de brindar a nuestros clientes servicios de riego de la más alta calidad junto con los mejores productos disponibles.",
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
      description: "Diseños de riego especializados, cálculos hidráulicos, listas de cantidades, planos detallados, etc.",
      icon: "Design"
    },
    {
      id: "003",
      name: "Mantenimiento",
      description: "Ofrecemos servicios de mantenimiento preventivo y correctivo.",
      icon: "Maintenance"
    },
    {
      id: "004",
      name: "Suministro",
      description: "Ofrecemos suministros específicamente calculados para su proyecto gracias a RainBird Internacional.",
      icon: "Supply"
    },
  ]
}
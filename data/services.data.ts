
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "Advisory"
    },
    {
      id: "002",
      name: "Diseño",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "Design"
    },
    {
      id: "003",
      name: "Mantenimiento",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "Maintenance"
    },
    {
      id: "004",
      name: "Suministro",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "Supply"
    },
  ]
}
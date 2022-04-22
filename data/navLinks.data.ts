/**
 * Links that will be observed in the navigation menu
 *
 * id - Id of the page, it is used for the map function of react
 * name - name of the page
 * url - Url that will be obtained when clicking the link
 */

export type NavLinkType = {
  id: string,
  name: string,
  url: string
}

export const navLinks: NavLinkType[] = [
  {
    id: "001",
    name: "Inicio",
    url: "/"
  },
  {
    id: "002",
    name: "Nosotros",
    url: "/about"
  },
  {
    id: "003",
    name: "Proyectos",
    url: "/proyectos"
  },
  {
    id: "004",
    name: "Contáctanos",
    url: "/contacto"
  },
]
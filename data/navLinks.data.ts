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

export const navLinks = [
  {
    id: '001',
    name: 'Home',
    url: '/'
  },
  {
    id: '002',
    name: 'About',
    url: '/about'
  },
  {
    id: '003',
    name: 'Services',
    url: '/services'
  },
  {
    id: '004',
    name: 'Projects',
    url: '/projects'
  },
  {
    id: '005',
    name: 'Contact',
    url: '/contact'
  },
]
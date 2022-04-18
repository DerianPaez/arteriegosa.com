import Link from "next/link"

export const mapLinks = (links: any) => {
  return (
    links.map((link: any) => {
      return (
        <li key={link.id}>
          <Link href={link.url}>
            <a aria-label={link.name}>
              {link.name}
            </a>
          </Link>
        </li>
      )
    })
  )
}
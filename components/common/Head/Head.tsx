import type { VFC } from 'react'
import SEO from '../SEO'

const Head:VFC = () => {
  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </SEO>
  )
}

export default Head

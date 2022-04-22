import * as React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const MapStyled = styled.div`
  width: 100%;
  height: 100%;

  iframe {
    border: none;
  }
`

const Map: React.FC<Props> = ({ ...props }) => {
  return (
    <MapStyled>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1676.4240673840345!2d-79.91887101487922!3d-2.063581442795956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d13aff5646659%3A0xcc6434d36ebdc086!2sMetropolis%202%20etapa%20E!5e0!3m2!1ses!2sec!4v1650638871575!5m2!1ses!2sec"
        allowFullScreen
        loading="lazy"
        { ...props }
      >
      </iframe>
    </MapStyled>
  )
}

export default Map

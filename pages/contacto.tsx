import * as React from 'react'
import styled from 'styled-components'

// Components
import { Input, Map, Section } from '@components/common'

const ContactStyled = styled.div`
  /*  */

  .contact {
    .contact__container {
      display: grid;
      gap: 20px;
    }

    .contact__form {
      display: grid;
      gap: 20px;
    }

    .contact__form__title {
      font-size: 28px;
      font-weight: 500;
    }

    .form {
      display: grid;
      gap: 15px;
    }

    .input {
      width: 100%;
    }
  }
`

const Contact: React.FC = () => {
  return (
    <ContactStyled>
      <Section className="contact">
        <div className="contact__container">
          <div className="contact__form">
            <h2 className="contact__form__title">Comunicate con nosotros</h2>
            <form className="form" action="" method="POST">
              <Input className="input name" type="text" placeholder="Nombre"/>
              <Input className="input phone" type="tel" placeholder="Celular"/>
              <Input className="input email" type="email" placeholder="Correo electrónico"/>
            </form>
          </div>
          <div className="contact__map">
            <Map />
          </div>
        </div>
      </Section>
    </ContactStyled>
  )
}

export default Contact

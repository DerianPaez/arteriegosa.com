import * as React from 'react'
import * as Yup from 'yup'
import styled from 'styled-components'
import { useFormik } from 'formik'

// Theme
import { H2 } from '@config/themeConfig'

// Components
import { Button, Input, Map, Section, Textarea, Select, Banner } from '@components/common'

const ContactStyled = styled.div`
  .contact {
    .contact__container {
      display: grid;
      gap: 20px;
    }

    .contact__form__title {
      max-width: 320px;
    }

    .contact__form {
      display: grid;
      gap: 30px;
    }

    .form {
      display: grid;
      grid-template-areas:
        "name"
        "phone"
        "email"
        "service"
        "message"
        "button";
      gap: 15px;
    }

    .name { grid-area: name }
    .phone { grid-area: phone }
    .email { grid-area: email }
    .service { grid-area: service }
    .message { grid-area: message }
    .button { grid-area: button }

    .input, .textarea, .select {
      width: 100%;
    }

    .contact__map {
      width: 100%;
      height: 100%;
      min-height: 150px;
    }

    .map {
      width: 100%;
      height: 100%;
    }


    @media (min-width: 768px) {
      .contact__container {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
      }

      .form {
        grid-template-areas:
          "name phone"
          "email service"
          "message message"
          "button .";
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
    }

    @media (min-width: 1024px) {
      .contact__container {
        grid-template-columns: 1.2fr 1fr;
      }
    }
  }
`

const Contact: React.FC = () => {
  const initialValues = { name: '', phone: '', email: '', service:'', message: '' }
  const validationSchema = Yup.object({
    name: Yup.string(),
    phone: Yup.string().min(9).max(10),
    email: Yup.string().email('Correo Invalido'),
    service: Yup.string(),
    message: Yup.string()
  })
  const onSubmit = async (values: any, actions: any) => {
    console.log(values)
    alert('El envio de dicha información se realizará cuando la página esté publicada.')
    actions.resetForm()
    // fetch('/api/form', {
    //   method: 'POST',
    //   body: JSON.stringify(values)
    // })
  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  return (
    <ContactStyled>
      <Banner
        title="Contáctanos"
      />

      <Section className="contact">
        <div className="contact__container">
          <div className="contact__form">
            <H2 className="contact__form__title">Comunicate Con Nosotros</H2>
            <form className="form" action="" method="POST" onSubmit={formik.handleSubmit}>
              <Input id="name" form={formik} className="input name" type="text" name="name" placeholder="Nombre" />
              <Input id="phone" form={formik} className="input phone" type="tel" name="phone" placeholder="Celular" />
              <Input id="email" form={formik} className="input email" type="email" name="email" placeholder="Correo electrónico" />
              <Select
                id="service"
                placeholder="Servicios"
                className="select service"
                name="service"
                form={formik}
                options={[
                  { id: "001", label: "Sistema de riego", value:"Sistema de riego" },
                  { id: "002", label: "Areas verdes", value:"Areas verdes" },
                ]}
              />
              <Textarea id="message" form={formik} className="textarea message" name="message" placeholder="Mensaje" rows={5} />
              <Button className="button" type="submit">Enviar</Button>
            </form>
          </div>
          <div className="contact__map">
            <Map className="map"/>
          </div>
        </div>
      </Section>
    </ContactStyled>
  )
}

export default Contact

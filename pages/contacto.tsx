import * as React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import styled from 'styled-components'

// Components
import { Button, Input, Map, Section, Textarea } from '@components/common'
import Select from '@components/common/Select/Select'

const ContactStyled = styled.div`
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
    }

    .map {
      width: 100%;
      height: 100%;
    }


    @media (min-width: 768px) {
      .contact__container {
        grid-template-columns: repeat(2, 1fr);
      }

      .form {
        grid-template-areas:
          "name phone"
          "email service"
          "message message"
          "button .";
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
  const onSubmit = (values: any, actions: any) => {
    console.log(values)
    // actions.resetForm()
  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  return (
    <ContactStyled>
      <Section className="contact">
        <div className="contact__container">
          <div className="contact__form">
            <h2 className="contact__form__title">Comunicate con nosotros</h2>
            <form className="form" action="" method="POST" onSubmit={formik.handleSubmit}>
              <Input id="name" form={formik} className="input name" type="text" name="name" placeholder="Nombre" required />
              <Input id="phone" form={formik} className="input phone" type="tel" name="phone" placeholder="Celular" required />
              <Input id="email" form={formik} className="input email" type="email" name="email" placeholder="Correo electrónico" required />
              <Select className="select service" defaultValue={"DEFAULT"}>
                <option selected hidden value="DEFAULT" label="Servicio" />
                <option value="Sistema de riego" label="Sistema de riego" />
                <option value="Areas verdes" label="Areas Verdes" />
              </Select>
              <Textarea className="textarea message" placeholder="Mensaje" rows={5} required />
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

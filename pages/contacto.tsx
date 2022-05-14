import * as React from 'react'
import * as Yup from 'yup'
import styled from 'styled-components'
import { useFormik } from 'formik'

// Theme
import { H2 } from '@config/themeConfig'

// Components
import {
  Button,
  Input,
  Map,
  Section,
  Textarea,
  Select,
  Banner
} from '@components/common'
import { contactData } from '@data/contact.data'
import { NextPage } from 'next'

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

    .contact__form__errors {
      color: ${({ theme }) => theme.colors.error};
    }

    .form {
      display: grid;
      grid-template-areas:
        'name'
        'phone'
        'email'
        'service'
        'message'
        'button';
      gap: 15px;
    }

    .name {
      grid-area: name;
    }
    .phone {
      grid-area: phone;
    }
    .email {
      grid-area: email;
    }
    .service {
      grid-area: service;
    }
    .message {
      grid-area: message;
    }
    .button {
      grid-area: button;
    }

    .input,
    .textarea,
    .select {
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
          'name phone'
          'email service'
          'message message'
          'button .';
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

const Contact: NextPage = () => {
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  }
  const validationSchema = Yup.object({
    name: Yup.string(),
    phone: Yup.string(),
    email: Yup.string().email('Correo Invalido'),
    service: Yup.string(),
    message: Yup.string().required('El mensaje es Obligatorio')
  })
  const onSubmit = (values: any, actions: any) => {
    let message = ''

    function* spanishKey() {
      yield 'Nombres'
      yield 'Celular'
      yield 'Email'
      yield 'Servicio'
      yield 'Mensaje'
    }

    const spanishKeyGenerator = spanishKey()
    for (let value of Object.values(values)) {
      const key = spanishKeyGenerator.next().value
      if (value !== '') {
        message += `*${key}*: ${value}\n`
      }
    }
    message += `\nEnviado desde arteriegosa.com`

    const url = `https://wa.me/${contactData.cellphone}?text=${encodeURI(
      message
    )}`
    window.open(url, '_blank')
    actions.resetForm()
  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const isObjectEmpty = (object: Object) => {
    return Object.entries(object).length === 0
  }

  const formikErrors = Object.values(formik.errors).map((value: string) => {
    return value
  })

  return (
    <ContactStyled>
      <Banner title="Contáctanos" />

      <Section className="contact">
        <div className="contact__container">
          <div className="contact__form">
            <H2 className="contact__form__title">{contactData.title}</H2>
            {formikErrors.length !== 0 && (
              <div className="contact__form__errors">
                {formikErrors.map((error, index) => {
                  const lastError = formikErrors.length - 1
                  if (lastError === index) return error
                  return error + ' | '
                })}
              </div>
            )}
            <form
              className="form"
              action=""
              method="POST"
              onSubmit={formik.handleSubmit}
            >
              <Input
                id="name"
                form={formik}
                className="input name"
                type="text"
                name="name"
                placeholder="Nombres"
              />
              <Input
                id="phone"
                form={formik}
                className="input phone"
                type="tel"
                name="phone"
                placeholder="Celular"
              />
              <Input
                id="email"
                form={formik}
                className="input email"
                type="email"
                name="email"
                placeholder="Correo electrónico"
              />
              <Select
                id="service"
                placeholder="Servicios"
                className="select service"
                name="service"
                form={formik}
                options={contactData.serviceList}
              />
              <Textarea
                id="message"
                form={formik}
                className="textarea message"
                name="message"
                placeholder="Mensaje"
                rows={5}
              />
              <Button className="button" type="submit">
                Enviar
              </Button>
            </form>
          </div>
          <div className="contact__map">
            <Map className="map" />
          </div>
        </div>
      </Section>
    </ContactStyled>
  )
}

export default Contact

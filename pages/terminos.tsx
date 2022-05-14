import { NextPage } from 'next'
import * as React from 'react'
import styled from 'styled-components'

// Components
import { Section } from '@components/common'

const TermsStyled = styled.div`
  .terms {
    padding-top: 60px;

    h1 {
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.colors.primary};

      @media (min-width: 768px) {
        font-size: 45px;
      }

      @media (min-width: 1024px) {
        font-size: 60px;
      }
    }

    h2 {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    h3 {
      margin: 10px 0;
    }

    p {
      padding: 10px 0;
    }

    strong {
      color: ${({ theme }) => theme.colors.black};
      font-weight: 700;
    }

    ul {
      margin-left: 60px;
      margin-bottom: 40px;
    }

    li {
      list-style: disc;
    }
  }
`

const Terms: NextPage = () => {
  return (
    <TermsStyled>
      <Section className="terms">
        <h1>Términos y condiciones</h1>
        <p>Última actualización: 22 de marzo del 2022</p>
        <p>
          Lea estos términos y condiciones detenidamente antes de utilizar
          Nuestro Servicio.
        </p>
        <h2>Interpretación y Definiciones</h2>

        <h3>Interpretación</h3>
        <p>
          Las palabras cuya letra inicial está en mayúscula tienen significados
          definidos bajo las siguientes condiciones. Las siguientes definiciones
          tendrán el mismo significado independientemente de que aparezcan en
          singular o en plural.
        </p>

        <h3>Definiciones</h3>
        <p>A los efectos de estos Términos y Condiciones:</p>
        <ul>
          <li>
            <p>
              <strong>Afiliado</strong> significa una entidad que controla, es
              controlada o está bajo control común con una parte, donde
              "control" significa la propiedad del 50% o más de las acciones,
              participación accionaria u otros valores con derecho a voto para
              la elección de directores u otra autoridad administrativa.
            </p>
          </li>
          <li>
            <p>
              <strong>País</strong> se refiere a: Ecuador
            </p>
          </li>
          <li>
            <p>
              <strong>Compañia</strong> (referida como "la Empresa", "Nosotros",
              "Nos" o "Nuestro" en este Acuerdo) se refiere a ArteRiego
            </p>
          </li>
          <li>
            <p>
              <strong>Dispositivo</strong> significa cualquier dispositivo que
              pueda acceder al Servicio, como una computadora, un teléfono
              celular o una tableta digital.
            </p>
          </li>
          <li>
            <p>
              <strong>Servicio</strong> se refiere al sitio web.
            </p>
          </li>
          <li>
            <p>
              <strong>Los Términos y condiciones</strong> (también denominados
              "Términos") significan estos Términos y condiciones que forman el
              acuerdo completo entre Usted y la Compañía con respecto al uso del
              Servicio.
            </p>
          </li>
          <li>
            <p>
              <strong>Servicio de redes sociales de terceros</strong> significa
              cualquier servicio o contenido (incluidos datos, información,
              productos o servicios) proporcionado por un tercero que puede
              mostrarse, incluirse o ponerse a disposición mediante el Servicio.
            </p>
          </li>
          <li>
            <p>
              <strong>El sitio web</strong> se refiere a Tour Etec, accesible
              desde{' '}
              <a
                href="https://www.arteriegosa.com"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://www.arteriegosa.com
              </a>
            </p>
          </li>
          <li>
            <p>
              <strong>Usted</strong> se refiere a la persona que accede o
              utiliza el Servicio, o la empresa u otra entidad legal en nombre
              de la cual dicha persona accede o utiliza el Servicio, según
              corresponda.
            </p>
          </li>
        </ul>

        <h2>Reconocimiento</h2>
        <p>
          Estos son los Términos y Condiciones que rigen el uso de este Servicio
          y el acuerdo que opera entre Usted y la Compañía. Estos Términos y
          Condiciones establecen los derechos y obligaciones de todos los
          usuarios con respecto al uso del Servicio.
        </p>
        <p>
          Su acceso y uso del Servicio está condicionado a Su aceptación y
          cumplimiento de estos Términos y condiciones. Estos Términos y
          condiciones se aplican a todos los visitantes, usuarios y otras
          personas que acceden o utilizan el Servicio.
        </p>
        <p>
          Al acceder o utilizar el Servicio, usted acepta estar sujeto a estos
          Términos y condiciones. Si no está de acuerdo con alguna parte de
          estos Términos y condiciones, no podrá acceder al Servicio.
        </p>
        <p>
          Usted declara que es mayor de 18 años. La Compañía no permite que los
          menores de 18 años utilicen el Servicio.
        </p>
        <p>
          Su acceso y uso del Servicio también está condicionado a Su aceptación
          y cumplimiento de la Política de Privacidad de la Compañía. Nuestra
          Política de privacidad describe Nuestras políticas y procedimientos
          sobre la recopilación, el uso y la divulgación de Su información
          personal cuando utiliza la Aplicación o el Sitio web y le informa
          sobre Sus derechos de privacidad y cómo la ley lo protege. Lea
          atentamente Nuestra Política de Privacidad antes de utilizar Nuestro
          Servicio.
        </p>

        <h2>Enlaces a otros sitios web</h2>
        <p>
          Nuestro Servicio puede contener enlaces a sitios web o servicios de
          terceros que no son propiedad ni están controlados por la Compañía.
        </p>
        <p>
          La Compañía no tiene control ni asume ninguna responsabilidad por el
          contenido, las políticas de privacidad o las prácticas de los sitios
          web o servicios de terceros. Además, reconoce y acepta que la Compañía
          no será responsable, directa o indirectamente, de ningún daño o
          pérdida causados ​​o presuntamente causados ​​por o en relación con el
          uso o la confianza en dicho contenido, bienes o servicios disponibles
          en o a través de dichos sitios web o servicios.
        </p>
        <p>
          Le recomendamos encarecidamente que lea los términos y condiciones y
          las políticas de privacidad de cualquier sitio web o servicio de
          terceros que visite.
        </p>

        <h2>Terminación</h2>
        <p>
          Podemos rescindir o suspender Su acceso de inmediato, sin previo aviso
          ni responsabilidad, por cualquier motivo, incluido, entre otros, si
          incumple estos Términos y condiciones.
        </p>
        <p>
          Tras la rescisión, su derecho a utilizar el Servicio cesará
          inmediatamente.
        </p>

        <h2>Limitación de responsabilidad</h2>
        <p>
          Sin perjuicio de los daños en los que pueda incurrir, la
          responsabilidad total de la Compañía y cualquiera de sus proveedores
          en virtud de cualquier disposición de estos Términos y Su recurso
          exclusivo por todo lo anterior se limitará al monto que realmente pagó
          a través del Servicio o 100 USD. si no ha comprado nada a través del
          Servicio.
        </p>
        <p>
          En la máxima medida permitida por la ley aplicable, en ningún caso la
          Compañía o sus proveedores serán responsables de daños especiales,
          incidentales, indirectos o consecuentes (incluidos, entre otros, daños
          por lucro cesante, pérdida de datos o otra información, por
          interrupción del negocio, por lesiones personales, pérdida de
          privacidad que surja o esté relacionada de alguna manera con el uso o
          la incapacidad de usar el Servicio, software de terceros y/o hardware
          de terceros utilizado con el Servicio, o de lo contrario en relación
          con cualquier disposición de estos Términos), incluso si la Compañía o
          cualquier proveedor ha sido advertido de la posibilidad de tales daños
          e incluso si el remedio no cumple con su propósito esencial.
        </p>
        <p>
          Algunos estados no permiten la exclusión de garantías implícitas o la
          limitación de responsabilidad por daños incidentales o consecuentes,
          lo que significa que algunas de las limitaciones anteriores pueden no
          aplicarse. En estos estados, la responsabilidad de cada parte se
          limitará en la mayor medida permitida por la ley.
        </p>

        <h2>Descargo de responsabilidad "TAL CUAL" y "SEGÚN DISPONIBILIDAD"</h2>
        <p>
          El Servicio se le proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD" y
          con todas las fallas y defectos sin garantía de ningún tipo. En la
          medida máxima permitida por la ley aplicable, la Compañía, en su
          propio nombre y en nombre de sus Afiliados y sus respectivos
          otorgantes de licencias y proveedores de servicios, renuncia
          expresamente a todas las garantías, ya sean expresas, implícitas,
          estatutarias o de otro tipo, con respecto a la Servicio, incluidas
          todas las garantías implícitas de comerciabilidad, idoneidad para un
          propósito particular, título y no infracción, y garantías que puedan
          surgir del curso de la negociación, el curso del desempeño, el uso o
          la práctica comercial. Sin limitación a lo anterior, la Compañía no
          ofrece ninguna garantía o compromiso, y no hace ninguna representación
          de que el Servicio cumplirá con Sus requisitos, logrará los resultados
          previstos, será compatible o funcionará con cualquier otro software,
          aplicación, sistema o servicio, operará sin interrupción, cumplir con
          los estándares de rendimiento o confiabilidad o estar libre de errores
          o que cualquier error o defecto puede o será corregido.
        </p>
        <p>
          Sin limitar lo anterior, ni la Compañía ni ninguno de los proveedores
          de la compañía hace ninguna representación o garantía de ningún tipo,
          expresa o implícita: (i) en cuanto a la operación o disponibilidad del
          Servicio, o la información, contenido y materiales o productos
          incluido en el mismo; (ii) que el Servicio será ininterrumpido o libre
          de errores; (iii) en cuanto a la precisión, confiabilidad o actualidad
          de cualquier información o contenido proporcionado a través del
          Servicio; o (iv) que el Servicio, sus servidores, el contenido o los
          correos electrónicos enviados desde o en nombre de la Compañía están
          libres de virus, secuencias de comandos, troyanos, gusanos, malware,
          bombas de tiempo u otros componentes dañinos.
        </p>
        <p>
          Algunas jurisdicciones no permiten la exclusión de ciertos tipos de
          garantías o limitaciones de los derechos legales aplicables de un
          consumidor, por lo que es posible que algunas o todas las exclusiones
          y limitaciones anteriores no se apliquen a usted. Pero en tal caso,
          las exclusiones y limitaciones establecidas en esta sección se
          aplicarán en la mayor medida exigible según la ley aplicable.
        </p>

        <h2>Ley que rige</h2>
        <p>
          Las leyes del País, excluyendo sus conflictos de leyes, regirán estos
          Términos y Su uso del Servicio. Su uso de la Aplicación también puede
          estar sujeto a otras leyes locales, estatales, nacionales o
          internacionales.
        </p>

        <h2>Resolución de disputas</h2>
        <p>
          Si tiene alguna inquietud o disputa sobre el Servicio, acepta intentar
          primero resolver la disputa de manera informal comunicándose con la
          Compañía.
        </p>

        <h2>Para usuarios de la Unión Europea (UE)</h2>
        <p>
          Si es un consumidor de la Unión Europea, se beneficiará de las
          disposiciones obligatorias de la ley del país en el que reside.
        </p>

        <h2>Cumplimiento legal de los Estados Unidos</h2>
        <p>
          Usted declara y garantiza que (i) no se encuentra en un país sujeto al
          embargo del gobierno de los Estados Unidos, o que ha sido designado
          por el gobierno de los Estados Unidos como un país de "apoyo al
          terrorismo", y (ii) no está incluido en cualquier lista del gobierno
          de los Estados Unidos de partes prohibidas o restringidas.
        </p>

        <h2>Divisibilidad y renuncia</h2>
        <h3>Divisibilidad</h3>
        <p>
          Si alguna disposición de estos Términos se considera inaplicable o
          inválida, dicha disposición se cambiará e interpretará para lograr los
          objetivos de dicha disposición en la mayor medida posible según la ley
          aplicable y las disposiciones restantes continuarán en pleno vigor y
          efecto.
        </p>

        <h3>Exención</h3>
        <p>
          Salvo lo dispuesto en el presente, la falta de ejercicio de un derecho
          o de exigir el cumplimiento de una obligación en virtud de estos
          Términos no afectará la capacidad de una parte para ejercer dicho
          derecho o exigir dicho cumplimiento en cualquier momento posterior ni
          la renuncia a un incumplimiento constituirá una renuncia a cualquier
          incumplimiento posterior.
        </p>

        <h2>Traducción Interpretación</h2>
        <p>
          Estos Términos y condiciones pueden haber sido traducidos si los hemos
          puesto a su disposición en nuestro Servicio. Usted acepta que el texto
          original en inglés prevalecerá en caso de disputa.
        </p>

        <h2>Cambios a estos Términos y Condiciones</h2>
        <p>
          Nos reservamos el derecho, a Nuestro exclusivo criterio, de modificar
          o reemplazar estos Términos en cualquier momento. Si una revisión es
          importante, haremos todos los esfuerzos razonables para proporcionar
          un aviso de al menos 30 días antes de que entren en vigencia los
          nuevos términos. Lo que constituye un cambio material se determinará a
          Nuestro exclusivo criterio.
        </p>
        <p>
          Al continuar accediendo o utilizando Nuestro Servicio después de que
          esas revisiones entren en vigencia, Usted acepta estar sujeto a los
          términos revisados. Si no está de acuerdo con los nuevos términos, en
          su totalidad o en parte, deje de usar el sitio web y el Servicio.
        </p>

        <h2>Contáctenos</h2>
        <p>
          Si tiene alguna pregunta sobre estos Términos y Condiciones, puede
          contactarnos:
        </p>
        <ul>
          <li>Por correo electrónico: arteriego@hotmail.com</li>
        </ul>
      </Section>
    </TermsStyled>
  )
}

export default Terms

import * as React from 'react'
import styled from 'styled-components'

// Theme
import { H2, Paragraph } from '@config/themeConfig'

// Components
import { Section } from '@components/common'

const PrivacyStyled = styled.div`
  .privacy {
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
      color: ${({ theme }) => theme.colors.paragraph};
    }
  }
`

const Privacy: React.FC = () => {
  return (
    <PrivacyStyled>
      <Section className="privacy">
        <h1>Políticas de privacidad</h1>
        <Paragraph>Última actualización: 22 de marzo del 2022</Paragraph>
        <Paragraph>Esta Política de privacidad describe Nuestras políticas y procedimientos sobre la recopilación, uso y divulgación de Su información cuando usa el Servicio y le informa sobre sus derechos de privacidad y cómo la ley lo protege.</Paragraph>
        <Paragraph>Usamos sus datos personales para proporcionar y mejorar el servicio. Al utilizar el Servicio, acepta la recopilación y el uso de información de acuerdo con esta Política de privacidad.</Paragraph>

        <H2>Interpretación y Definiciones.</H2>
        <h3>Interpretación</h3>
        <Paragraph>Las palabras cuya letra inicial está en mayúscula tienen significados definidos en las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de que aparezcan en singular o en plural.</Paragraph>
        <h3>Definiciones</h3>
        <Paragraph>A los efectos de esta Política de privacidad:</Paragraph>
        <ul>
          <li>
            <Paragraph><strong>Cuenta</strong> significa una cuenta única creada para que usted acceda a nuestro Servicio o partes de nuestro Servicio.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Compañía</strong> (denominado "la Compañía", "Nosotros", "Nos" o "Nuestro" en este Acuerdo) se refiere a ArteRiego</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Cookies</strong> Las cookies son pequeños archivos que un sitio web coloca en su computadora, dispositivo móvil o cualquier otro dispositivo, que contienen los detalles de su historial de navegación en ese sitio web, entre sus muchos usos.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>País</strong> se refiere a: Ecuador</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Dispositivo</strong> significa cualquier dispositivo que pueda acceder al Servicio, como una computadora, un teléfono celular o una tableta digital.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Datos personales</strong> son cualquier información que se relacione con una persona identificada o identificable.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Servicio</strong> se refiere al sitio web.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Proveedor de servicios</strong> significa cualquier persona física o jurídica que procesa los datos en nombre de la Compañía. Se refiere a empresas de terceros o personas empleadas por la Compañía para facilitar el Servicio, para proporcionar el Servicio en nombre de la Compañía, para realizar servicios relacionados con el Servicio o para ayudar a la Compañía a analizar cómo se utiliza el Servicio.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Datos de uso</strong> se refieren a los datos recopilados automáticamente, ya sea generados por el uso del Servicio o por la propia infraestructura del Servicio (por ejemplo, la duración de una visita a la página).</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Sitio web</strong> se refiere a ArteRiego, accesible desde <a href="https://www.arteriegosa.com" rel="external nofollow noopener" target="_blank">https://www.arteriegosa.com</a></Paragraph>
          </li>
          <li>
            <Paragraph><strong>Usted</strong> se refiere a la persona que accede o utiliza el Servicio, o la empresa u otra entidad legal en nombre de la cual dicha persona accede o utiliza el Servicio, según corresponda.</Paragraph>
          </li>
        </ul>

        <h2>Recopilación y uso de sus datos personales</h2>
        <h3>Tipos de datos recopilados</h3>
        <h4>Información personal</h4>
        <Paragraph>Mientras usamos Nuestro Servicio, podemos pedirle que nos proporcione cierta información de identificación personal que pueda usarse para contactarlo o identificarlo. La información de identificación personal puede incluir, entre otros:</Paragraph>
        <ul>
          <li>
            <Paragraph>Dirección de correo electrónico</Paragraph>
          </li>
          <li>
            <Paragraph>Nombre y apellido</Paragraph>
          </li>
          <li>
            <Paragraph>Número de teléfono</Paragraph>
          </li>
          <li>
            <Paragraph>Servicio</Paragraph>
          </li>
          <li>
            <Paragraph>Datos de uso</Paragraph>
          </li>
        </ul>

        <h4>Datos de uso</h4>
        <Paragraph>Los datos de uso se recopilan automáticamente cuando se utiliza el servicio.</Paragraph>
        <Paragraph>Los datos de uso pueden incluir información como la dirección del Protocolo de Internet de su dispositivo (por ejemplo, la dirección IP), el tipo de navegador, la versión del navegador, las páginas de nuestro Servicio que visita, la hora y fecha de su visita, el tiempo que pasó en esas páginas, el dispositivo único identificadores y otros datos de diagnóstico.</Paragraph>
        <Paragraph>Cuando accede al Servicio a través de un dispositivo móvil, podemos recopilar cierta información automáticamente, que incluye, entre otros, el tipo de dispositivo móvil que utiliza, la identificación única de su dispositivo móvil, la dirección IP de su dispositivo móvil, su dispositivo móvil sistema operativo, el tipo de navegador de Internet móvil que utiliza, identificadores de dispositivo únicos y otros datos de diagnóstico.</Paragraph>
        <Paragraph>También podemos recopilar información que su navegador envía cada vez que visita nuestro Servicio o cuando accede al Servicio a través de un dispositivo móvil.</Paragraph>

        <h4>Tecnologías de seguimiento y cookies</h4>
        <Paragraph>Usamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro servicio y almacenar cierta información. Las tecnologías de seguimiento utilizadas son balizas, etiquetas y scripts para recopilar y rastrear información y para mejorar y analizar Nuestro Servicio. Las tecnologías que utilizamos pueden incluir:</Paragraph>
        <ul>
          <li>
            <Paragraph>
              <strong>Cookies o cookies del navegador.</strong>Una cookie es un pequeño archivo que se coloca en su dispositivo. Puede indicarle a su navegador que rechace todas las cookies o que indique cuándo se está enviando una cookie. Sin embargo, si no acepta las cookies, es posible que no pueda utilizar algunas partes de nuestro Servicio. A menos que haya ajustado la configuración de su navegador para que rechace las cookies, nuestro servicio puede utilizar cookies.
            </Paragraph>
          </li>
          <li>
            <Paragraph><strong>Flash Cookies.</strong> Ciertas características de nuestro Servicio pueden usar objetos almacenados localmente (o Cookies Flash) para recopilar y almacenar información sobre Sus preferencias o Su actividad en nuestro Servicio. Las cookies de Flash no se administran con la misma configuración del navegador que las utilizadas para las cookies del navegador. Para obtener más información sobre cómo puede eliminar las cookies de Flash, lea "¿Dónde puedo cambiar la configuración para deshabilitar o eliminar objetos compartidos locales?" disponible en <a href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_" rel="external nofollow noopener" target="_blank">Adobe</a></Paragraph>
          </li>
          <li>
            <Paragraph><strong>Web Beacons.</strong> Ciertas secciones de nuestro Servicio y nuestros correos electrónicos pueden contener pequeños archivos electrónicos conocidos como balizas web (también denominados gifs transparentes, etiquetas de píxeles y gifs de un solo píxel) que permiten a la Compañía, por ejemplo, contar los usuarios que han visitado esas páginas. o abrió un correo electrónico y para otras estadísticas del sitio web relacionadas (por ejemplo, registrar la popularidad de una determinada sección y verificar la integridad del sistema y del servidor).</Paragraph>
          </li>
        </ul>
        <Paragraph>Las cookies pueden ser cookies "persistentes" o de "sesión". Las cookies persistentes permanecen en su computadora personal o dispositivo móvil cuando se desconecta, mientras que las cookies de sesión se eliminan tan pronto como cierra su navegador web. Más información sobre las cookies: <a href="https://www.freeprivacypolicy.com/blog/cookies/" target="_blank">Cookies: ¿Qué hacen ?</a>.</Paragraph>
        <Paragraph>Utilizamos cookies de sesión y persistentes para los fines que se establecen a continuación:</Paragraph>
        <ul>
          <li>
            <Paragraph><strong>Cookies necesarias / esenciales</strong></Paragraph>
            <Paragraph>Tipo: Cookies de sesión</Paragraph>
            <Paragraph>Administrado por: Nosotros</Paragraph>
            <Paragraph>Propósito: Estas cookies son esenciales para brindarle los servicios disponibles a través del sitio web y para permitirle utilizar algunas de sus funciones. Ayudan a autenticar a los usuarios y a prevenir el uso fraudulento de las cuentas de usuario. Sin estas cookies, los servicios que ha solicitado no se pueden proporcionar, y solo usamos estas cookies para brindarle esos servicios.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Política de cookies / Cookies de aceptación de avisos</strong></Paragraph>
            <Paragraph>Tipo: Cookies persistentes</Paragraph>
            <Paragraph>Administrado por: Nosotros</Paragraph>
            <Paragraph>Propósito: Estas cookies identifican si los usuarios han aceptado el uso de cookies en el sitio web.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Funcionalidad de las Cookies</strong></Paragraph>
            <Paragraph>Tipo: Cookies persistentes</Paragraph>
            <Paragraph>Administrado por: Nosotros</Paragraph>
            <Paragraph>Propósito: estas cookies nos permiten recordar las elecciones que realiza cuando utiliza el sitio web, como recordar sus datos de inicio de sesión o su preferencia de idioma. El propósito de estas cookies es brindarle una experiencia más personal y evitar que tenga que volver a ingresar sus preferencias cada vez que utiliza el sitio web.</Paragraph>
          </li>
        </ul>
        <Paragraph>Para obtener más información sobre las cookies que utilizamos y sus opciones con respecto a las cookies, visite nuestra Política de cookies o la sección de Cookies de nuestra Política de privacidad.</Paragraph>
        <h3>Uso de sus datos personales</h3>
        <Paragraph>La Compañía puede utilizar los Datos Personales para los siguientes propósitos:</Paragraph>
        <ul>
          <li>
            <Paragraph><strong>Para proporcionar y mantener nuestro Servicio,</strong>, incluso para controlar el uso de nuestro Servicio.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Para administrar Su Cuenta:</strong> para administrar Su registro como usuario del Servicio. Los Datos Personales que proporcione pueden darle acceso a diferentes funcionalidades del Servicio que están disponibles para Usted como usuario registrado.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Para la ejecución de un contrato:</strong> el desarrollo, cumplimiento y ejecución del contrato de compra de los productos, artículos o servicios que haya comprado o de cualquier otro contrato con Nosotros a través del Servicio.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Para contactarlo:</strong> Para contactarlo por correo electrónico, llamadas telefónicas, SMS u otras formas equivalentes de comunicación electrónica, como las notificaciones push de una aplicación móvil sobre actualizaciones o comunicaciones informativas relacionadas con las funcionalidades, productos o servicios contratados, incluidas las actualizaciones de seguridad, cuando sea necesario o razonable para su implementación.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Para proporcionarle noticias</strong>, ofertas especiales e información general sobre otros bienes, servicios y eventos que ofrecemos y que son similares a los que ya ha comprado o sobre los que ha consultado, a menos que haya optado por no recibir dicha información.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Para gestionar sus solicitudes:</strong> Para atender y gestionar sus solicitudes para nosotros.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Para transferencias comerciales:</strong> podemos usar su información para evaluar o llevar a cabo una fusión, desinversión, reestructuración, reorganización, disolución u otra venta o transferencia de algunos o todos nuestros activos, ya sea como empresa en funcionamiento o como parte de una quiebra, liquidación, o procedimiento similar, en el que los Datos personales que tenemos sobre los usuarios de nuestro Servicio se encuentran entre los activos transferidos.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Para otros fines:</strong> podemos utilizar su información para otros fines, como análisis de datos, identificación de tendencias de uso, determinación de la eficacia de nuestras campañas promocionales y para evaluar y mejorar nuestro Servicio, productos, servicios, marketing y su experiencia.</Paragraph>
          </li>
        </ul>
        <Paragraph>Podemos compartir su información personal en las siguientes situaciones:</Paragraph>
        <ul>
          <li>
            <Paragraph><strong>Con proveedores de servicios:</strong> podemos compartir su información personal con proveedores de servicios para monitorear y analizar el uso de nuestro servicio, para comunicarnos con usted.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Para transferencias comerciales:</strong> podemos compartir o transferir Su información personal en relación con, o durante las negociaciones de, cualquier fusión, venta de activos de la Compañía, financiamiento o adquisición de la totalidad o una parte de Nuestro negocio a otra compañía.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Con afiliados:</strong> podemos compartir su información con nuestros afiliados, en cuyo caso les exigiremos que cumplan con esta Política de privacidad. Los afiliados incluyen nuestra empresa matriz y cualquier otra subsidiaria, socios de empresas conjuntas u otras empresas que controlemos o que estén bajo control común con nosotros.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Con socios comerciales:</strong> podemos compartir su información con nuestros socios comerciales para ofrecerle ciertos productos, servicios o promociones.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Con otros usuarios:</strong> cuando comparte información personal o interactúa de otra manera en las áreas públicas con otros usuarios, dicha información puede ser vista por todos los usuarios y puede distribuirse públicamente en el exterior.</Paragraph>
          </li>
          <li>
            <Paragraph><strong>Con su consentimiento:</strong> podemos divulgar su información personal para cualquier otro propósito con su consentimiento.</Paragraph>
          </li>
        </ul>
        <h3>Conservación de sus datos personales</h3>
        <Paragraph>La Compañía retendrá sus datos personales solo durante el tiempo que sea necesario para los fines establecidos en esta Política de privacidad. Retendremos y usaremos sus datos personales en la medida necesaria para cumplir con nuestras obligaciones legales (por ejemplo, si estamos obligados a retener sus datos para cumplir con las leyes aplicables), resolver disputas y hacer cumplir nuestros acuerdos y políticas legales.</Paragraph>
        <Paragraph>La Compañía también conservará los Datos de uso para fines de análisis interno. Los datos de uso generalmente se conservan durante un período de tiempo más corto, excepto cuando estos datos se utilizan para fortalecer la seguridad o mejorar la funcionalidad de nuestro servicio, o estamos legalmente obligados a conservar estos datos durante períodos de tiempo más largos.</Paragraph>
        <h3>Transferencia de sus datos personales</h3>
        <Paragraph>Su información, incluidos los Datos personales, se procesa en las oficinas operativas de la Compañía y en cualquier otro lugar donde se encuentren las partes involucradas en el procesamiento. Significa que esta información puede transferirse y mantenerse en computadoras ubicadas fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de su jurisdicción.</Paragraph>
        <Paragraph>Su consentimiento a esta Política de privacidad seguido de Su envío de dicha información representa Su acuerdo con esa transferencia.</Paragraph>
        <Paragraph>La Compañía tomará todas las medidas razonablemente necesarias para garantizar que Sus datos sean tratados de forma segura y de acuerdo con esta Política de Privacidad y no se realizará ninguna transferencia de Sus Datos Personales a una organización o país a menos que existan controles adecuados establecidos, incluida la seguridad de Tus datos y otra información personal.</Paragraph>
        <h3>Divulgación de sus datos personales</h3>
        <h4>Transacciones de negocios</h4>
        <Paragraph>Si la Compañía está involucrada en una fusión, adquisición o venta de activos, sus datos personales pueden ser transferidos. Le avisaremos antes de que sus datos personales se transfieran y estén sujetos a una política de privacidad diferente.</Paragraph>
        <h4>Cumplimiento de la ley</h4>
        <Paragraph>En determinadas circunstancias, es posible que la Compañía deba divulgar sus datos personales si así lo exige la ley o en respuesta a solicitudes válidas de las autoridades públicas (por ejemplo, un tribunal o una agencia gubernamental).</Paragraph>
        <h4>Otros requisitos legales</h4>
        <Paragraph>La Compañía puede divulgar sus datos personales si cree de buena fe que dicha acción es necesaria para:</Paragraph>
        <ul>
          <li>Cumplir con una obligación legal</li>
          <li>Proteger y defender los derechos o propiedad de la Compañía.</li>
          <li>Prevenir o investigar posibles irregularidades en relación con el Servicio.</li>
          <li>Proteger la seguridad personal de los Usuarios del Servicio o del público.</li>
          <li>Protéjase contra la responsabilidad legal</li>
        </ul>

        <h3>Seguridad de sus datos personales</h3>
        <Paragraph>La seguridad de sus datos personales es importante para nosotros, pero recuerde que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger sus datos personales, no podemos garantizar su seguridad absoluta.</Paragraph>

        <h2>Privacidad de los niños</h2>
        <Paragraph>Nuestro Servicio no se dirige a ninguna persona menor de 13 años. No recopilamos a sabiendas información de identificación personal de ninguna persona menor de 13 años. Si usted es un padre o tutor y sabe que su hijo nos ha proporcionado datos personales, por favor Contáctenos.</Paragraph>
        <Paragraph>Si nos damos cuenta de que hemos recopilado Datos personales de cualquier persona menor de 13 años sin verificación del consentimiento de los padres, tomamos medidas para eliminar esa información de Nuestros servidores.</Paragraph>
        <h2>Enlaces a otros sitios web</h2>
        <Paragraph>Nuestro Servicio puede contener enlaces a otros sitios web que no son operados por Nosotros. Si hace clic en el enlace de un tercero, será dirigido al sitio de ese tercero. Le recomendamos encarecidamente que revise la Política de privacidad de cada sitio que visite.</Paragraph>
        <Paragraph>No tenemos control ni asumimos ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de sitios o servicios de terceros.</Paragraph>
        <h2>Cambios a esta política de privacidad</h2>
        <Paragraph>Es posible que actualicemos nuestra Política de privacidad de vez en cuando. Le notificaremos de cualquier cambio publicando la nueva Política de privacidad en esta página.</Paragraph>
        <Paragraph>Le informaremos por correo electrónico y / o un aviso destacado en Nuestro Servicio, antes de que el cambio entre en vigencia y actualizaremos la fecha de "Última actualización" en la parte superior de esta Política de privacidad.</Paragraph>
        <Paragraph>Se le aconseja que revise esta Política de privacidad periódicamente para ver si hay cambios. Los cambios a esta Política de privacidad entran en vigencia cuando se publican en esta página.</Paragraph>
        <h2>Contáctenos</h2>
        <Paragraph>Si tiene alguna pregunta sobre esta Política de privacidad, puede contactarnos:</Paragraph>
        <ul>
          <li>Por correo electrónico: arteriego@hotmail.com</li>
        </ul>
      </Section>
    </PrivacyStyled>
  )
}

export default Privacy

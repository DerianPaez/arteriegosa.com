import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { NextPage } from 'next'

// Data
import { hero as heroData } from '@data/hero.data'
import { services as serviceData } from '@data/services.data'
import { productsRainbird as productList } from '@data/productsRainbird.data'
import { projects as projectsData, ProjectType } from '@data/projects.data'
import { clients as clientsData } from '@data/clients.data'

// Components
import {
  Button,
  Section,
  ServiceItem,
  FeaturedProject,
  Brand
} from '@components/common'

// Icons
import ArrowLeft from '@components/icons/ArrowLeft'
import ArrowRight from '@components/icons/ArrowRight'
import { verticalGardens } from '@data/verticalGardens.data'
import { H2, Paragraph } from '@config/themeConfig'
import { getImageSize } from 'next/dist/server/image-optimizer'
import Link from 'next/link'

const HomeStyled = styled.div`
  .hero {
    height: calc(100vh - 62px);
    width: 100%;
    display: grid;
    align-items: center;
    padding: 0;
    background-image: linear-gradient(
        to right,
        rgb(0 0 0 / 59%),
        rgba(37, 114, 62, 0.3)
      ),
      url('/assets/BackgroundHero.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .hero__content {
      display: grid;
      gap: 15px;
    }

    .hero__title {
      font-size: 32px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.secundaryLight};
    }

    .hero__description {
      max-width: 500px;
      color: ${({ theme }) => theme.colors.secundaryLight};
    }

    @media (min-width: 475px) {
      .hero__title {
        font-size: 45px;
      }

      .hero__description {
        font-size: 20px;
      }
    }

    @media (min-width: 768px) {
      height: calc(100vh - 116px);

      .hero__title {
        font-size: 45px;
      }

      .hero__description {
        font-size: 20px;
      }
    }

    @media (min-width: 1024px) {
      .hero__title {
        font-size: 70px;
      }
    }
  }

  .services {
    .services__container {
      display: grid;
      gap: 50px;
    }
    .services__header {
      display: grid;
      gap: 15px;
      text-align: center;
    }
    .services__title {
      font-size: 28px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.secundaryDark};
    }
    .services__text {
      color: ${({ theme }) => theme.colors.paragraph};
    }
    .services__grid {
      display: grid;
      gap: 20px;
    }
    @media (min-width: 425px) {
      .services__grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media (min-width: 768px) {
      .services__title {
        font-size: 32px;
      }
      .services__text {
        font-size: 20px;
        width: 690px;
        justify-self: center;
      }
      .services__grid {
        grid-template-columns: none;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
      }
    }
    @media (min-width: 1024px) {
      .services__title {
        font-size: 40px;
      }
    }
  }

  .publicityProduct {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        to right,
        rgba(37, 114, 62, 0.7),
        rgba(37, 114, 62, 0.7)
      ),
      url('/assets/BackgroundDrops.png');

    .publicityProduct__container {
      display: grid;
      grid-template-areas:
        'content'
        'image'
        'controllers';
      gap: 20px;
    }

    .publicityProduct__image {
      grid-area: image;
      width: 100%;
      position: relative;
      z-index: ${({ theme }) => theme.positions.image};
    }

    .publicityProduct__content {
      display: grid;
      grid-auto-flow: row;
      grid-auto-rows: max-content;
      grid-area: content;
      color: ${({ theme }) => theme.colors.secundaryLight};
      gap: 20px;
    }

    .product__title {
      font-size: 18px;
      font-weight: 400;
      text-transform: uppercase;
    }

    .product__phrase {
      font-size: 28px;
      font-weight: 600;
    }

    .product__name {
      font-size: 16px;
      font-weight: 400;
    }

    .product__featureItem {
      margin-left: 20px;
      list-style: disc;
    }

    .publicityProduct__controllers {
      width: max-content;
      grid-area: controllers;
      display: grid;
      grid-auto-columns: max-content;
      grid-auto-flow: column;
      gap: 10px;
    }

    .handle {
      border: none;
      outline: none;
      cursor: pointer;
      padding: 10px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.secudaryLight};
    }

    @media (min-width: 768px) {
      .product__phrase {
        font-size: 32px;
      }

      .publicityProduct__container {
        width: 90%;
        margin: 0 auto;
        justify-self: center;
        grid-template-areas: 'image content';
        grid-template-columns: 0.8fr 1fr;
        justify-content: center;
        align-items: center;
      }

      .publicityProduct__controllers {
        width: auto;
        position: absolute;
        justify-content: space-between;
        left: 5%;
        right: 5%;
        z-index: ${({ theme }) => theme.positions.controllers};
      }
    }

    @media (min-width: 1024px) {
      .product__phrase {
        font-size: 40px;
      }
    }
  }

  .featuredProjects {
    .featuredProjects__container {
      display: grid;
      gap: 40px;
    }

    .featuredProjects__title {
      font-size: 28px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary};
      text-align: center;
    }

    .featuredProjects__list {
      display: grid;
      gap: 20px;
    }

    @media (min-width: 768px) {
      .featuredProjects__title {
        font-size: 32px;
      }

      .featuredProjects__list {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .featuredProjects__title {
        font-size: 40px;
      }

      .featuredProjects__list {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }

  .verticalGardens {
    .verticalGardens__header {
      display: grid;
      gap: 20px;

      p {
        font-size: 20px;
        justify-self: center;
      }
    }

    .verticalGardens__container {
      display: grid;
      gap: 20px;
    }

    .verticalsGardens__images {
      position: relative;
      height: 350px;
      margin-bottom: 70px;
      transition: 1s;

      @media (min-width: 1024px) {
        &:hover .image__1 {
          transform: translate(1000px);
        }

        &:hover .image__2 {
          transform: translate(100px, 40px) scale(1.2);
          z-index: 101;
        }
      }
    }

    .image__1 {
      position: absolute;
      top: 20%;
      right: 0;
      width: 80%;
      height: 100%;
      z-index: 100;
      transition: 1s;
    }

    .image__2 {
      position: absolute;
      left: 0;
      width: 60%;
      height: 100%;
      z-index: 99;
      transition: 1s;
    }

    @media (min-width: 768px) {
      .verticalGardens__container {
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
      }
    }
  }

  .clients {
    background-color: rgba(37, 114, 62, 0.08);
    .clients__container {
      display: grid;
      gap: 20px;
    }
    .clients__header {
      display: grid;
      gap: 15px;
      text-align: center;
    }
    .clients__title {
      font-size: 28px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary};
    }
    .clients__description {
      color: ${({ theme }) => theme.colors.paragraph};
    }
    .clients__list {
      display: grid;
      gap: 20px;
    }
    @media (min-width: 425px) {
      .clients__list {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 768px) {
      .clients__title {
        font-size: 32px;
      }
      .clients__description {
        font-size: 20px;
        width: 690px;
        justify-self: center;
      }
      .clients__list {
        grid-template-columns: repeat(5, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .clients__title {
        font-size: 40px;
      }
    }
  }
`

const Home: NextPage = () => {
  const filterByProjectImportance = (project: ProjectType) => project.importance
  const featuredProjects: ProjectType[] = projectsData.filter(
    filterByProjectImportance
  )

  const lastProduct = productList.length - 1
  const [product, setProduct] = React.useState(0)
  const nextProduct = () => {
    if (lastProduct === product) {
      setProduct(0)
    } else {
      setProduct(p => ++p)
    }
  }

  const prevProduct = () => {
    if (product === 0) {
      setProduct(lastProduct)
    } else {
      setProduct(p => --p)
    }
  }

  return (
    <HomeStyled>
      <Section className="hero">
        <div className="hero__content">
          <h2 className="hero__title">{heroData.headline}</h2>
          <p className="hero__description">{heroData.description}</p>
          <Button href="/contacto">{heroData.button}</Button>
        </div>
      </Section>

      <Section className="services">
        <div className="services__container">
          <div className="services__header">
            <h1 className="services__title">{serviceData.title}</h1>
            <p className="services__text">{serviceData.text}</p>
          </div>
          <div className="services__grid">
            {serviceData.servicesList.map(service => {
              return (
                <ServiceItem
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.description}
                  icon={service.icon}
                />
              )
            })}
          </div>
        </div>
      </Section>

      <Section className="publicityProduct">
        <div className="publicityProduct__container">
          <div className="publicityProduct__image">
            {productList[product].image && (
              <Image
                src={productList[product].image}
                alt="Image"
                aria-label="Image"
                objectFit="contain"
                width={1080}
                height={1080}
                priority={false}
              />
            )}
          </div>
          <div className="publicityProduct__content">
            <div className="publicityProduct__content__header">
              <h2 className="product__title">Productos Rainbird</h2>
              <h3 className="product__phrase">{productList[product].phrase}</h3>
            </div>

            <div className="publicityProduct__content__main">
              <h4 className="product__name">{productList[product].name}</h4>
              {productList[product].model && (
                <p className="product__model">{productList[product].model}</p>
              )}
            </div>

            <ul className="product__features">
              {productList[product].features.map((x: string, i: number) => {
                return (
                  <li key={i} className="product__featureItem">
                    {x}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="publicityProduct__controllers">
            <button className="handle left" onClick={() => prevProduct()}>
              <ArrowLeft width="19" height="100%" />
            </button>
            <button className="handle right" onClick={() => nextProduct()}>
              <ArrowRight width="19" height="100%" />
            </button>
          </div>
        </div>
      </Section>

      <Section className="featuredProjects">
        <div className="featuredProjects__container">
          <h2 className="featuredProjects__title">Proyectos Destacados</h2>
          <div className="featuredProjects__list">
            {featuredProjects.map(project => {
              return <FeaturedProject key={project.id} {...project} />
            })}
          </div>
        </div>
      </Section>

      <Section className="verticalGardens">
        <div className="verticalGardens__container">
          <div className="verticalGardens__header">
            <H2>{verticalGardens.title}</H2>
            <Paragraph>{verticalGardens.description}</Paragraph>
          </div>
          <div className="verticalsGardens__images">
            {verticalGardens.images.map((garden, i) => {
              return (
                <figure key={garden.id} className={`image__${i + 1}`}>
                  <Image
                    src={garden.image.url}
                    alt={garden.name}
                    aria-label="Image"
                    objectFit="cover"
                    layout="fill"
                    priority={false}
                  />
                </figure>
              )
            })}
            {/* <figure className={`image__1`}>
              <img src={verticalGardens.images[0].image.url} alt={verticalGardens.images[0].name} />
            </figure>
            <figure className={`image__2`}>
              <img src={verticalGardens.images[1].image.url} alt={verticalGardens.images[1].name} />
            </figure> */}
          </div>
        </div>
      </Section>

      <Section className="clients">
        <div className="clients__container">
          <div className="clients__header">
            <h2 className="clients__title">{clientsData.title}</h2>
            <p className="clients__description">{clientsData.description}</p>
          </div>
          <div className="clients__list">
            {clientsData.clientList.map(client => {
              return <Brand key={client.id} {...client} />
            })}
          </div>
        </div>
      </Section>
    </HomeStyled>
  )
}

export default Home

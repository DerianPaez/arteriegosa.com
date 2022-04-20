import ArrowLeft from '@components/icons/ArrowLeft'
import ArrowRight from '@components/icons/ArrowRight'
import { Wrapper } from '@config/themeConfig'
import Image from 'next/image'
import * as React from 'react'
import styled from 'styled-components'

type Props = {
  productList: any[]
}

const PublicityProductStyled = styled.section`
  padding: 50px 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, rgba(37, 114, 62, 0.7), rgba(37, 114, 62, 0.7)), url('/assets/BackgroundDrops.png');

  .publicityProduct__container {
    display: grid;
    grid-template-areas:
      "content"
      "image"
      "controllers";
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
      grid-template-areas:
      "image content";
      grid-template-columns: .8fr 1fr;
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
`

const PublicityProduct: React.FC<Props> = ({ productList }) => {
  const lastProduct = productList.length - 1
  const [product, setProduct] = React.useState(0)
  const nextProduct = () => {
    if(lastProduct === product) {
      setProduct(0)
    } else {
      setProduct(p => ++p)
    }
  }

  const prevProduct = () => {
    if(product === 0) {
      setProduct(lastProduct)
    } else {
      setProduct(p => --p)
    }
  }

  return (
    <PublicityProductStyled>
      <Wrapper>
        <div className="publicityProduct__container">
          <div className="publicityProduct__image">
            {productList[product].image &&
              <Image
                src={productList[product].image}
                alt="Image"
                aria-label="Image"
                objectFit="contain"
                width={1080}
                height={1080}
                priority={false}
              />
            }
          </div>
          <div className="publicityProduct__content">
            <div className="publicityProduct__content__header">
              <h2 className="product__title">Productos Rainbird</h2>
              <h3 className="product__phrase">{productList[product].phrase}</h3>
            </div>

            <div className="publicityProduct__content__main">
              <h4 className="product__name">{productList[product].name}</h4>
              {productList[product].model && <p className="product__model">{productList[product].model}</p>}
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
      </Wrapper>
    </PublicityProductStyled>
  )
}

export default PublicityProduct

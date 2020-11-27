import React from 'react';
import productData from './data';

import {
  ProductsContainer,
  ProductHeading,
  ProductsWrapper,
  ProductCard,
  ProductInfo,
  ProductImg,
  ProductTitle,
  ProductDesc
} from './style';
import { PrimaryButton } from '../../GlobalStyles';

const index = () => {
  return (
    <ProductsContainer>
      <ProductHeading>Choose your favorite</ProductHeading>
      <ProductsWrapper>
        {productData.map((product) => (
          <ProductCard key={product.title}>
            <ProductImg src={product.img} alt={product.title} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <PrimaryButton>Add to Cart</PrimaryButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default index;

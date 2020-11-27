import styled from 'styled-components';

export const ProductsContainer = styled.section`
  min-height: 100vh;
  padding: 5rem calc((100% - 1300px) / 2);
`;

export const ProductHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 5rem;
  text-align: center;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductCard = styled.div`
  width: 350px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  line-height: 2;
`;

export const ProductImg = styled.img`
  width: 80%;
  height: 500px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  height: calc(100% - 500px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const ProductDesc = styled.p`
  font-size: 1.1rem;
  line-height: 1.5rem;
  margin-bottom: 3rem;
`;

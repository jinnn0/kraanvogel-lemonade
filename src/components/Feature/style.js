import styled from 'styled-components';

export const FeatureContainer = styled.section`
  height: 100vh;
  padding: 5rem calc((100% - 1300px) / 2);
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const FeatureLeft = styled.div`
  flex: 0.4;
  padding: 0 1rem;
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 1000px) {
    margin-bottom: 0;
  }
`;

export const FeatureRight = styled.div`
  order: -1;
  flex: 0.6;

  @media (min-width: 1000px) {
    order: 0;
  }
`;

export const FeatureH1 = styled.h1`
  font-size: clamp(2rem, 2vw, 1rem);
  font-weight: lighter;
  margin-bottom: 1.5rem;
`;

export const FeatureP = styled.p`
  font-size: clamp(1rem, 1.5vw, 1rem);
  max-width: 450px;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

export const FeatureImg = styled.img`
  width: 100%;
  max-width: 1000px;
  height: 100%;
`;

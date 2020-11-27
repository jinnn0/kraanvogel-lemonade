import styled from 'styled-components';

export const FeatureContainer = styled.section`
  min-height: 100vh;
  padding: 5rem calc((100% - 1000px) / 2);
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  } 

  /* background-color: pink; */

  * {
    /* border: 1px solid black; */
  }
`;
 
export const FeatureLeft = styled.div`
  flex: 1;
  padding: 0 1rem;
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 1000px) {
    margin-bottom: 0;
  }
`;

export const FeatureRight = styled.div`
  order: -1;
  flex: 1;
  overflow: hidden;

  @media (min-width: 1000px) {
    order: 0;
  }
`;

export const FeatureH1 = styled.h1`
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: lighter;
  margin-bottom: 1.5rem;
`;

export const FeatureP = styled.p`
  font-size: clamp(0.5rem, 1.5vw, 0.9rem);
  max-width: 450px;
  margin: 0 auto 2rem;
`;

export const FeatureImg = styled.img`
  width: 100%;
  max-width: 1000px;
  height: 100%;
`;

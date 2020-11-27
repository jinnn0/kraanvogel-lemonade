import styled from 'styled-components';

export const HeroContainer = styled.div`
  height: 100vh;
`;

export const HeroContent = styled.div`
  height: calc(100% - 80px);
  padding: 0 calc((100% - 1300px) / 2);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 60%;

  @media (min-width: 500px) {
    width: clamp(500px, 80vw, 1300px);
    height: clamp(350px, 60vh, 800px);
  }

  source {
    width: 100%;
    height: 100%;
  }
`;

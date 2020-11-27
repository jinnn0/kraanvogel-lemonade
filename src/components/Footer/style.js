import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 250px;
  padding: 0 calc((100vw - 1300px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  min-width: 100px;

  @media (min-width: 600px) {
    margin-left: auto;
  }
`;

export const SocialLink = styled.div`
  font-size: 1.5rem;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  cursor: pointer;
`;

import React from 'react';
import { FooterContainer, SocialMedia, SocialLink } from './style';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Logo } from '../../GlobalStyles';

const index = () => {
  return (
    <FooterContainer>
      <Logo to="/">Kraanvogel</Logo>
      <SocialMedia>
        <SocialLink>
          <FaFacebook />
        </SocialLink>
        <SocialLink>
          <FaInstagram />
        </SocialLink>
        <SocialLink>
          <AiOutlineTwitter />
        </SocialLink>
      </SocialMedia>
    </FooterContainer>
  );
};

export default index;

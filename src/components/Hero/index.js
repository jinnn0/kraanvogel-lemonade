import React, { useState } from 'react';
import Header from '../Heaader';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroVideo } from './style';
import video from '../../assets/videos/kraanvogel.mp4';

const Hero = () => {
  const [shouldSidebarOpen, setShouldSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setShouldSidebarOpen(!shouldSidebarOpen);
  };

  return (
    <HeroContainer>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar shouldSidebarOpen={shouldSidebarOpen} toggleSidebar={toggleSidebar} />
      <HeroContent>
        <HeroVideo autoPlay muted loop>
          <source src={video} autoPlay muted />
        </HeroVideo>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

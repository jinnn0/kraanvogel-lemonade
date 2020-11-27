import React from 'react';
import { FeatureContainer, FeatureLeft, FeatureRight, FeatureImg, FeatureH1, FeatureP } from './style';
import { PrimaryButtonOutline } from '../../GlobalStyles';
import featureImg from '../../assets/images/both-3.png';

const index = () => {
  return (
    <FeatureContainer>
      <FeatureLeft>
        <FeatureH1>Lomonade of the month</FeatureH1>
        <FeatureP>
          The "perfect lemon flavor" of Kraanvogel lemonade impressed our testers, who felt this
          thirst-quencher came close to "homemade." Although a few thought it too sweet, most enjoyed its
          "tangy," but balanced taste.
        </FeatureP>
        <PrimaryButtonOutline>Order Now</PrimaryButtonOutline>
      </FeatureLeft>
      <FeatureRight>
        <FeatureImg src={featureImg} alt="feature image" />
      </FeatureRight>
    </FeatureContainer>
  );
};

export default index;

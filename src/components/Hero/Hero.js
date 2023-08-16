import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection} from './HeroStyles';
import {WritingEffect} from './WritingEffect';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        <h1 style = {{color:'magenta'}}>{`Hi, I am Jai Phookan`}</h1>
      </SectionText>
      <WritingEffect />
      <Button onClick = {() => window.open('https://drive.google.com/uc?export=download&id=1HrEtCbm-Omo94cKG7XsKNIAT52BJK6HS', '_blank')}>Download My CV</Button>
    </LeftSection>
    
  </Section>
);

export default Hero;
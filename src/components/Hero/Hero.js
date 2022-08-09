import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello and welcome to<br />
        my personal portfolio
      </SectionTitle>
      <SectionText>
        I'm Bohdan Tokmach, but you can call me BT. 🤭 <br />
        I started learning JavaScript and was even more
        enthused with making websites interactive. I am
        now spending my time building projects with React JS and
        learning new technologies. <br />
        Check out some of my latest projects, and download my CV...
      </SectionText>
      <Button>Download Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
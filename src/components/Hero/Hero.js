import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi. I'm Bohdan, nice to meet you. 🫠 <br />
        Fascinated with how intricate programming can be, I was quickly drawn to learn more. I started learning JavaScript and was even more
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
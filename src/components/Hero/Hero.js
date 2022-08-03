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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis error atque, ex nemo ea accusamus aperiam laudantium, cumque praesentium harum distinctio voluptatibus hic repudiandae repellat veritatis doloribus porro culpa consequuntur?
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
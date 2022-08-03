import React from 'react';
import { DiFirebase, DiReact, DiPhotoshop } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nulla perferendis deleniti est id dignissimos, eos nisi doloribus alias repellat dolorum recusandae labore sit quidem ipsa nobis, culpa adipisci. Similique?
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML5, CSS3, SASS/SCSS, <br />
            Bootstrap, Material-UI <br />
            JavaScript, TypeScript <br />
            React.js, Next.js <br />
            Redux, Redux Toolkit, Zustand
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma and Avocode
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

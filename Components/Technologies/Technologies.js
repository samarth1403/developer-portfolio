import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  
  <Section id='technology'>
    
    <SectionDivider/>
    <br/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with range of technologies in the web development world . From BackEnd to Design
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size='3rem'/>
        <br/>
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>Experience with <br/>
                React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem'/>
        <br/>
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>Experience with <br/>
                Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <br/>
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>Experience with <br/>
                React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  
  { number: 5000, text: 'React.js', },
  { number: 5000, text: 'Redux.js', },
  { number: 5000, text: 'Next.js', },
  { number: 5000, text: 'Java', },
  { number: 5000, text: 'Node.js', },
  { number: 5000, text: 'Express.js', },
  { number: 5000, text: 'MySQL', },
  { number: 5000, text: 'MongoDB', },
  { number: 5000, text: 'Figma', },
  { number: 20, text: 'HTML'},
  { number: 1000, text: 'CSS', },
  { number: 1000, text: 'Tailwind CSS', },
  { number: 1000, text: 'Material UI', },
  { number: 1900, text: 'Javascript', },
  { number: 1900, text: 'Typescript', },
  { number: 5000, text: 'Bootstarp', },
  { number: 5000, text: 'SASS', },
  { number: 5000, text: 'Git', },
  { number: 5000, text: 'GitHub', },
];

const Acomplishments = () => (
  <Section id='skills'>
    <SectionTitle>Skills</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.text}</BoxNum>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
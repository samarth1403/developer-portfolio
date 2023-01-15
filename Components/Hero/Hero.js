import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section nopadding row>
    <LeftSection>
      <SectionTitle main center>
        Hello Everyone <br />
        Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        I am a Front-end Web Developer . I love to develop website features that can enhance the user experience.
      </SectionText>
      <Button onClick={()=> window.location.href = '#about'}>About Me</Button>
      <Button onClick={()=> window.location.href = '#skills'}>Skills</Button>
    </LeftSection>
  </Section>
);

export default Hero;

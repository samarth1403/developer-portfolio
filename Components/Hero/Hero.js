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
        I am a Full Stack Developer . I love to make websites .
      </SectionText>
      <Button onClick={()=> window.location.href = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;

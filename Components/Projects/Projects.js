import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import memories from '../../public/images/memories.png';
import bakenjoy from '../../public/images/bake-n-joy.png';
import Image from 'next/image';

const Projects = () => {
 
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, visit, source }) => {
            return (
              <BlogCard key={id}>
                {id === 0 && (
                  <Image
                    src={bakenjoy}
                    alt="project"
                    style={{ width: "400px", height: "250px" }}
                  />
                )}
                {id === 1 && (
                  <Image
                    src={memories}
                    alt="project"
                    style={{ width: "400px", height: "250px" }}
                  />
                )}
                {id !== 0 && id !== 1 && <Img src={image} />}
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <br />
                <div>
                  <TitleContent>Technologies</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={source}>Code</ExternalLinks>
                  <ExternalLinks href={visit}>Visit</ExternalLinks>
                </UtilityList>
              </BlogCard>
            );
          }
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import TechIcons from './TechIcons';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <br />
    <SectionTitle>Projects</SectionTitle>
   
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <Hr />
            <TitleContent>Tech Stack</TitleContent>
            <TagList>
              {project.tags.map((tag, i) => (
                <div key={i} style={{ textAlign: 'center', margin: '5px' }}>
                  <TechIcons tag={tag} />
                  <div>{tag}</div>
                </div>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit} target='_blank'>VISIT</ExternalLinks>
            <ExternalLinks href={project.source} target='_blank'>CODE</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
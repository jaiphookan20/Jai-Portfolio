import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import TechIcons from "../Projects/TechIcons";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { SkillsContainer, SkillsBox, TechTag } from "./TechnologiesStyles";

const techStacks = [
  "Java",
  "Spring",
  "React",
  "TypeScript",
  "NodeJS",
  "MongoDB",
  "Express",
  "MySQL",
  "Hibernate",
  "Postman",
  "JavaScript",
  "AWS",
  "Swagger",
  "PostgreSQL",
  "Redis",
  "Python",
  "Docker",
  "Supabase",
  "OpenAI",
  "Railway",
];
const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Skills & Tools</SectionTitle>
    <SkillsContainer>
      {techStacks.map((skill, i) => {
        return (
          <SkillsBox key={i}>
            <div style={{ textAlign: "center" }}>
              <TechIcons tag={skill} />
              <TechTag>{skill}</TechTag>
            </div>
          </SkillsBox>
        );
      })}
    </SkillsContainer>
  </Section>
);

export default Technologies;

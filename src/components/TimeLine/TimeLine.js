import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id = "about">
      <br /><br />
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm a recent graduate with a Master of Information Technology in Distributed Computing from the University of Melbourne, achieving a 77% WAM.  <br />
        My technical skills encompass a wide range of modern web technologies and distributed systems:<br />
        <br />
        Languages: TypeScript, JavaScript, Java, Python, C# <br />
        Frontend Technologies: React, TailwindCSS <br />
        Backend Technologies: Node.js, Express, Spring, Flask, .NET <br />
        Databases & Tools: PostgreSQL, MySQL, MongoDB, Redis, ElasticSearch <br />
        DevOps: AWS, Docker, NGINX, GitHub Actions <br />

        <br />
        Notable Projects & Experience: <br />
        OceaniaDevs: A job platform for tech professionals in Australia that I developed and launched independently. Built with Python, Flask, PostgreSQL, Redis, and React, it features optimized search capabilities and a robust CI/CD pipeline. Currently serving a growing user base in beta. <br />
        <br />
        Update (Software Development Intern): Led the transformation of a core recommender system for an AI-powered social planning app, achieving a 30% increase in user engagement. Engineered scalable backend services using TypeScript, Node.js, and ElasticSearch. <br />
        <br />
        Academic Journal Management Platform: Developed a comprehensive system for an international research journal, earning the Merit Award in Computing & Information Systems. Built secure REST APIs using Node.js and MySQL for complex user management workflows. <br />
        <br />
      </SectionText>
      <CarouselContainer ref = {carouselRef} onScroll = {handleScroll}>
        <>
          {TimeLineData.map((item, index) => {
            <CarouselMobileScrollNode key = {index} final = {index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index = {index}
                id={`carousel__item-${index}`}
                active = {activeItem}
                onClick = {(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          })}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key = {index}
            index = {index}
            active = {activeItem}
            onClick = {(e) => handleClick(e, index)}
          >
            <CarouselButtonDot active = {activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;

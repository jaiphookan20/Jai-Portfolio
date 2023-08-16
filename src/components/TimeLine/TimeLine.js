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
        Back End & Full-Stack focused Developer experienced in Java, Spring, React, NodeJs, MySQL, and MongoDB <br />
        Currently pursuing a Masters in Information Technology at the University of Melbourne, specialising in Distributed Computing.
        Previously completed a 30 week military-style, intensive Backend Development bootcamp with Masai School. <br />
        I have a keen interest in product strategy & design, and prior to pursuing a career in software development, I worked in Investment Banking and as a Product Manager at a luxury hospitality brand.  
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

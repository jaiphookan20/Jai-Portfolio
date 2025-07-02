import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  width: ${(props) => props.totalImages * 100}%;
  transform: translateX(
    -${(props) => props.currentIndex * (100 / props.totalImages)}%
  );
`;

const SliderImage = styled.img`
  width: ${(props) => 100 / props.totalImages}%;
  height: 450px;
  object-fit: contain;
  flex-shrink: 0;
  background-color: #1a1a1a;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 18px;
  z-index: 10;
  transition: background 0.3s ease;
  border-radius: 5px;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 15px;
`;

const NextButton = styled(NavigationButton)`
  right: 15px;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.active ? "#9cc9e3" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.active ? "#9cc9e3" : "rgba(255, 255, 255, 0.8)"};
  }
`;

const ImageSlider = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // If only one image, display it without slider controls
  if (images.length === 1) {
    return (
      <SliderContainer>
        <SliderImage src={images[0]} alt={alt} totalImages={1} />
      </SliderContainer>
    );
  }

  return (
    <SliderContainer>
      <SliderWrapper currentIndex={currentIndex} totalImages={images.length}>
        {images.map((image, index) => (
          <SliderImage
            key={index}
            src={image}
            alt={`${alt} - Image ${index + 1}`}
            totalImages={images.length}
          />
        ))}
      </SliderWrapper>

      <PrevButton onClick={prevSlide} disabled={images.length <= 1}>
        ❮
      </PrevButton>

      <NextButton onClick={nextSlide} disabled={images.length <= 1}>
        ❯
      </NextButton>

      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default ImageSlider;

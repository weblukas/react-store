import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    /* .gallery-img {
    width: 400px;
    position: absolute;
    top: 70px;
    left: 200px;
  }

  .fade-in {
    animation: 0.5s ease 0.5s normal forwards 1 appear;
    opacity: 0;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  } */
`

const Image = ({src, isSelected}) => {
  return  <StyledImage
  src={src}
  alt="speaker"
  className={` gallery-img ${isSelected && "fade-in"}`}
/>
};

export default Image;

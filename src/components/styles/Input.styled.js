import styled from "styled-components";

export const StyledInput = styled.input`
  margin: 1rem;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    opacity: 1;
    transform: translate(-4px, -34px);
    z-index: 10;
  }

  &:nth-child(1)::after {
    background-color: ${(props) => props.color};
  }

  &:nth-child(2)::after {
    background-color: ${(props) => props.color};
  }

  &:nth-child(3)::after {
    background-color: ${(props) => props.color};
  }

  &::before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    background-color: white;
    opacity: 0;
    border-radius: 50%;
    box-shadow: 5px 5px 10px #cbced5;
    transform: translate(-9px, -9px);
    transition: all 0.2s ease;
    z-index: 10;
  }

  &:checked::before {
    opacity: 1;
  }
`;
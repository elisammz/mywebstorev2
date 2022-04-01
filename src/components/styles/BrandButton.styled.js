import styled, { css } from "styled-components";

const BrandButton = styled.button`
  border-color: #0f0f27;
  border-width: 0.5px;
  color: white;
  font-weight: 100;
  font-family: sans-serif;
  cursor: pointer;
  text-decoration: none;
  margin: 10px 10px;

  @media (max-width: 992px) {
    padding: 5px 25px;
  }

  ${(props) =>
    props.primary &&
    css`
      border-radius: 50px;
      font-size: 1em;
      padding: 30px 45px;
      background: linear-gradient(
        90deg,
        rgba(85, 111, 255, 1) 0%,
        rgba(255, 121, 142, 1) 100%
      );
      &:hover {
        color: white;
        background: linear-gradient(
          90deg,
          rgba(255, 121, 142, 1) 0%,
          rgba(85, 111, 255, 1) 100%
        );
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      font-size: 1em;
      padding: 20px 30px;
      background: linear-gradient(
        90deg,
        rgba(85, 111, 255, 1) 0%,
        rgba(255, 121, 142, 1) 100%
      );
      &:hover {
        color: white;
        background: linear-gradient(
          90deg,
          rgba(255, 121, 142, 1) 0%,
          rgba(85, 111, 255, 1) 100%
        );
      }
    `}

     ${(props) =>
    props.tertiary &&
    css`
      color: black;
      font-size: 1em;
      padding: 20px 30px;
      background: white;
      font-weight: 400;
      &:hover {
        background: black;
        color: white;
      }
    `}
`;

export default BrandButton;

import React from "react";
import styled from "styled-components";

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h2>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h2>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h2 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: inline-block;
  }
  @media (max-width: 576px) {
    span {
      display: block;
      margin: 0 0.5rem;
    }
  }
`;

export default Title;

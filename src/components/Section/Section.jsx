import React from "react";
import { MainTitle, TitleContainer } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <TitleContainer>
      <MainTitle>{title}</MainTitle>
      {children}
    </TitleContainer>
  );
};

export default Section;

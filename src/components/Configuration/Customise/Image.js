import React from "react";
import styled from "styled-components";
import Uploader from "./Image/ImageUploader";

const Block = styled.div``;

const Label = styled.div`
  margin: 2rem 0 1rem;
`;

export default ({ name, title = "Select an image" }) => {

  return (
    <Block>
      <Label>{title}</Label>
      <Uploader name={name} notice />
    </Block>
  );
};

import React, { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import Uploader from "./Image/ImageUploader";

const Block = styled.div``;

export default ({ name, title = "Select an image" }) => {

  return (
    <Block>
      <Title>{title}</Title>
      <Uploader name={name} notice />
    </Block>
  );
};

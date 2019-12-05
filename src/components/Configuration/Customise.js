import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Image from "./Customise/Image";

const Block = styled(Container)`
  margin-top: -2rem;
`;

export default () => {
  return (
    <Block>
      <Image name="background" title="Select your image" />
    </Block>
  );
};

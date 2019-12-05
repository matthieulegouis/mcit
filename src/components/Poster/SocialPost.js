import React from "react";
import styled from "styled-components";
import OwnerLogos from "./Content/OwnerLogos";
import Logos from "./Content/Logos";

const Block = styled.div`
  padding: 2rem 2rem 0;
  overflow: hidden;
  box-sizing: border-box;
`;

const Arrow = styled.img.attrs(props => ({
  src: "/svg/arrow_blue.svg"
}))`
  height: 7rem;
`;

const Text = styled.div`
  color: ${({ color }) => color};
  font-weight: bold;
  font-size: 3.625rem;
  line-height: 1.2;
`;

const Line = styled.div`
  content: "";
  width: 100%;
  height: 0.25rem;
  background-color: black;
  margin-bottom: 1rem;
`;

const LogosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;

  img {
    height: 3.5rem;
  }
`;

export default ({ info }) => {
  return (
    <Block>
      <Arrow />
      <Text color="#276ef1">
        Stand up,
        <br />
        don't stand by.
      </Text>
      <Text>Help stop sexual assault before it starts.</Text>
      <Line />
      <LogosWrapper>
        <OwnerLogos height="3.5rem" />
        <Logos />
      </LogosWrapper>
    </Block>
  );
};

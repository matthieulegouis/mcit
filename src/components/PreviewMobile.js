import React from "react";
import styled, { css } from "styled-components";
import Poster from "./Poster";

const Panel = styled.div`
  position: fixed;
  height: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1300;
  transition: height 0.3s ease;

  ${({ open }) =>
    open &&
    css`
      height: 100vh;
    `}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #303030;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default ({ open }) => {
  return (
    <Panel open={open}>
      <Container>
        <Poster preview mobile />
      </Container>
    </Panel>
  );
};

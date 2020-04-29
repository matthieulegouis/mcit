import React from "react";
import styled, { css } from "styled-components";
import ArrowLeft from "@material-ui/icons/ArrowBack";
import ArrowRight from "@material-ui/icons/ArrowForward";

const Arrows = styled.div`
  display: flex;
`;

const Arrow = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  max-width: 50%;
  height: 40px;
  outline: none;
  font-family: "sans1898";

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  span {
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  ${({ right }) =>
    right &&
    css`
      justify-content: flex-end;
      background-color: #CF4520;
      color: white;
    `}
`;

export default ({ currentTab, setTab }) => (
  <Arrows>
    {currentTab > 0 ? (
      <Arrow left onClick={() => setTab(currentTab - 1)}>
        <ArrowLeft /> <span>Previous</span>
      </Arrow>
    ) : (
      <div style={{ flexGrow: 1 }} />
    )}
    {currentTab < 2 && (
      <Arrow right onClick={() => setTab(currentTab + 1)}>
        <span>Next</span> <ArrowRight />
      </Arrow>
    )}
  </Arrows>
);

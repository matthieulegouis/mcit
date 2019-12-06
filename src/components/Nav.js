import React from "react";
import styled, { css } from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const Nav = styled(Tabs)`
  background: #CF4520;
  color: #FFF;
  ${({ isMobile }) =>
    isMobile &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      background-color: white;
      width: 100%;
      z-index: 100;
    `}
`;

const TabUI = styled(Tab)`
  background: #CF4520;
  color: #FFF;
`;

export default ({ currentTab = 0, setTab = () => {} }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Nav
      value={currentTab}
      onChange={(event, tab) => setTab(tab)}
      variant="fullWidth"
      indicatorColor="primary"
      isMobile={isMobile}
      showLabels
    >
      <TabUI label="Your image" />
      <TabUI label="Select your design" />
      <TabUI label="Share" />
    </Nav>
  );
};

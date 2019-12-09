import React from "react";
import styled, { css } from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const Nav = styled(Tabs)`
  min-height: 40px !important;
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
  position: relative;
  z-index: 1;
  min-height: 40px !important;
  background: #CF4520;
  color: #FFF !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  font-size: 16px !important;
  opacity: 1 !important;
  flex-direction: row !important;
  &.Mui-selected {
    background: #FFF;
    color: #CF4520 !important;
  }
  &.Mui-selected .icon {
    background: #CF4520;
    color: #FFF !important;
  }
  .MuiTab-wrapper {
    flex-direction: row;
  }
  .MuiTabs-indicator {
    display: none;
  }
  .icon {
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 5px;
    border-radius: 50%;
    background: #FFF;
    color: #CF4520;
    font-size: 13px;
    line-height: 25px;
    font-weight: 700;
  }
  .label {
    display: inline-block;
    position: relative;
    top: -2px;
  }
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
      <TabUI icon={<div className="icon">1</div>} label={<div className="label">Your name</div>} />
      <TabUI icon={<div className="icon">2</div>} label={<div className="label">Select your design</div>} />
      <TabUI icon={<div className="icon">3</div>} label={<div className="label">Share</div>} />
    </Nav>
  );
};

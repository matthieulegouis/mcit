import React from "react";
import styled from "styled-components";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const Nav = styled(Tabs)`
  min-height: 40px !important;
  background: #CF4520;
  color: #FFF;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
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
    font-family: "sans1898";
  }
  .label {
    display: inline-block;
    position: relative;
    top: -2px;
    font-family: "sans1898";
  }
  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 18px !important;
    .icon {
      display: none;
    }
  }
`;

export default ({ currentTab = 0, setTab = () => {} }) => {

  return (
    <Nav
      value={currentTab}
      onChange={(event, tab) => setTab(tab)}
      variant="fullWidth"
      indicatorColor="primary"
    >
      <TabUI icon={<div className="icon">1</div>} label={<div className="label">Your image</div>} />
      <TabUI icon={<div className="icon">2</div>} label={<div className="label">Select your design</div>} />
      <TabUI icon={<div className="icon">3</div>} label={<div className="label">Share</div>} />
    </Nav>
  );
};

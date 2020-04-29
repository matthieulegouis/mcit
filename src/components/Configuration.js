import React from "react";
import PaperMui from "@material-ui/core/Paper";
import styled from "styled-components";
import Nav from "./Nav";
import SwipeableViews from "react-swipeable-views";
import LayoutStep from "./Configuration/Layout";
import CustomiseStep from "./Configuration/Customise";
import Download from "./Download";
import Arrows from "./Configuration/Arrows";

const Configuration = styled(PaperMui)`
  box-shadow: none !important;
  border-radius: 0 !important;
  @media (max-width: 768px) {
    margin-top: 4.5rem;
  }
`;

const Step = styled.div`
  padding: 2rem 1rem;
`;

const Introduction = styled.div`
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  color: #555;
`;

export default ({ ...props }) => {
  const [currentTab, setTab] = React.useState(0);

  return (
    <Configuration>
      <Nav currentTab={currentTab} setTab={setTab} />
      <SwipeableViews index={currentTab} onChangeIndex={setTab} animateHeight>
        <Step>
          <CustomiseStep />
        </Step>
        <Step>
          <LayoutStep />
        </Step>
        <Step>
          <Introduction>Download your avatar</Introduction>
          <Download facebook />
          <Download twitter />
          <Download instagram />
        </Step>
      </SwipeableViews>
      <Arrows currentTab={currentTab} setTab={setTab} />
    </Configuration>
  );
};

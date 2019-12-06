import React from "react";
import PaperMui from "@material-ui/core/Paper";
import styled, { css } from "styled-components";
import Nav from "./Nav";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LayoutStep from "./Configuration/Layout";
import CustomiseStep from "./Configuration/Customise";
import ShareStep from "./Configuration/Share";
import Arrows from "./Configuration/Arrows";

const Configuration = styled(PaperMui)`
  ${({ isMobile }) =>
    isMobile &&
    css`
      margin-top: 4.5rem;
    `}
`;

const Step = styled.div`
  padding: 2rem 1rem;
`;

const SwipeableViewsUI = styled(SwipeableViews)`
  border-radius: 0 !important;
  box-shadow: none !important;
`;

export default ({ ...props }) => {
  const [currentTab, setTab] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Configuration isMobile={isMobile}>
      <Nav currentTab={currentTab} setTab={setTab} />
      <SwipeableViewsUI index={currentTab} onChangeIndex={setTab} animateHeight>
        <Step>
          <CustomiseStep />
        </Step>
        <Step>
          <LayoutStep />
        </Step>
        <Step>
          <ShareStep />
        </Step>
      </SwipeableViewsUI>
      <Arrows currentTab={currentTab} setTab={setTab} />
    </Configuration>
  );
};

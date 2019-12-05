import React from "react";
import styled, { css } from "styled-components";
import LayoutIcon from "@material-ui/icons/PhotoSizeSelectLargeOutlined";
import CustomiseIcon from "@material-ui/icons/TuneOutlined";
import ShareIcon from "@material-ui/icons/ShareOutlined";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const Nav = styled(Tabs)`
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
      <Tab label="Layout" icon={<LayoutIcon />} />
      <Tab label="Customise" icon={<CustomiseIcon />} />
      <Tab label="Share" icon={<ShareIcon />} />
    </Nav>
  );
};

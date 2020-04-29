import React from "react";
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ContainerMui from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MobileNav from "./components/MobileNav";
import Configuration from "./components/Configuration";
import Poster from "./components/Poster";
import PreviewMobile from "./components/PreviewMobile";

const Container = styled(ContainerMui)`
  max-width: 1100px !important;
  padding: 2rem 0 0;
  margin-bottom: 4rem;
`;

const PaperUI = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  border-radius: 0 !important;
  padding: 0;
  background: #303030 !important;
  background: linear-gradient(0deg, rgba(48,48,48,1) 40%, rgba(60,60,60,1) 40%) !important;
`;

const ContainerMobile = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0.5rem 5rem;
`;

export default () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const [previewMode, setPreviewMode] = React.useState(false);

  if (isDesktop) {
    return (
      <Container id="container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} lg={8} style={{ paddingBottom: 0 }}>
            <Configuration />
            <div id="tester" />
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <PaperUI>
              <Poster preview />
            </PaperUI>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    return (
      <ContainerMobile id="container">
        <Configuration />
        <MobileNav previewMode={previewMode} setPreviewMode={setPreviewMode} />
        <PreviewMobile open={previewMode} />
      </ContainerMobile>
    );
  }
};

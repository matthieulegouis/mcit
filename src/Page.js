import React from "react";
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ContainerMui from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Sticky from "react-stickynode";
import MobileNav from "./components/MobileNav";
import Configuration from "./components/Configuration";
import Poster from "./components/Poster";
import PreviewMobile from "./components/PreviewMobile";

const Container = styled(ContainerMui)`
  padding: 4rem 0 0;
  margin-bottom: 4rem;
`;

const PaperUI = styled(Paper)`
  border-radius: 0 !important;
  box-shadow: none !important;
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
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} lg={7} style={{ paddingBottom: 0 }}>
            <Configuration />
            <div id="tester" />
          </Grid>
          <Grid item xs={12} sm={12} lg={5}>
            <Sticky top={50} bottomBoundary="#container">
              <PaperUI>
                <Poster preview />
              </PaperUI>
            </Sticky>
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

import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import styled from "styled-components";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import ConfigContext from "./contexts/configContext";
import config from "./config/config.json";
import BuilerdContext from "./contexts/builderContext";
import defaultBuilderConfig from "./config/defaultBuilderConfig.json";
import Page from "./Page";
import Poster from "./components/Poster";

const Screensaver = styled.div`
  position: fixed;
  top: 100vh;
  left: 100vw;
  z-index: -1;
  opacity: 0;

  top: 0;
  left: -100px;
  opacity: 1 !important;
  z-index: 100;
  transform: scale(0.5);
  border: 1px solid red;
`;

export default class extends React.Component {
  state = defaultBuilderConfig;

  setBuilderConfig = (key, value) => this.setState({ [key]: value });

  render() {
    const context = {
      builderConfig: this.state,
      setBuilderConfig: this.setBuilderConfig
    };

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ConfigContext.Provider value={config}>
          <BuilerdContext.Provider value={context}>
            <Page {...this.props} />
            <Screensaver id="screensaver">
              <Poster />
            </Screensaver>
          </BuilerdContext.Provider>
        </ConfigContext.Provider>
      </ThemeProvider>
    );
  }
}

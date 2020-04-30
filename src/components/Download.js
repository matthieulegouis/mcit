import React, { useState } from "react";
import styled from "styled-components";
import ButtonMui from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

const getCanvas = () => {
  const lastScroll = window.scrollY;
  window.scrollTo(0, 0);
  const ref = document.querySelector("#screensaver");
  ref.style.opacity = 1;
  const canvas = html2canvas(ref, { scale: 1 });
  ref.style.opacity = 0;
  window.scroll(0, lastScroll);
  
  return canvas;
};

const Button = styled(ButtonMui).attrs({
  style: {
    position: "relative",
    marginBottom: "2rem",
    boxShadow: "none",
    fontFamily: "sans1898",
    minWidth: "300px",
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "1rem"
  }
})``;

const Img = styled.img`
  position: absolute;
  top: 9px;
  left: 15px;
  height: 20px;
`;

export default (props) => {
  const [statusImage, setStatusImage] = useState("ready");

  // Save previewed poster in PNG
  const savePng = async () => {
    const canvas = await getCanvas();
    canvas.toBlob(blob => {
      console.log(blob);
      saveAs(blob, "avatar.png");
    });
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {props.facebook ?
        <Button variant="contained" color="primary" onClick={savePng}>
          <Img src="/images/social/facebook.svg" />
          {statusImage === "ready" ? "Download for Facebook" : statusImage === "error" ? "Error" : "Running..."}
        </Button>
      : null}
      {props.twitter ?
        <Button variant="contained" color="primary" onClick={savePng}>
          <Img src="/images/social/twitter.svg" />
          {statusImage === "ready" ? "Download for Twitter" : statusImage === "error" ? "Error" : "Running..."}
        </Button>
      : null}
      {props.instagram ?
        <Button variant="contained" color="primary" onClick={savePng}>
          <Img src="/images/social/instagram.svg" />
          {statusImage === "ready" ? "Download for Instagram" : statusImage === "error" ? "Error" : "Running..."}
        </Button>
      : null}
    </Grid>
  );
};

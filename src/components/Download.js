import React, { useState } from "react";
import styled from "styled-components";
import ButtonMui from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { saveAs } from "file-saver";
import getCanvas from "../helpers/getCanvas";

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
    const savePng = async (e) => {
    var img = new Image();
    img.crossOrigin = "anonymous";
    img.src = 'http://localhost:3000/images/test.png';
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    img.onload = function() {
      ctx.drawImage(img, 0, 0, 300, 300);
      link.href = document.getElementById('canvas').toDataURL();
    };

    var link = document.createElement('a');
    link.innerHTML = 'Save';
    //link.href = document.getElementById('canvas').toDataURL();

    link.addEventListener('click', function(e) {
      link.download = "imagename.png";
    }, false);

    document.body.appendChild(link);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <canvas id="canvas" width="300" height="300"></canvas>
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


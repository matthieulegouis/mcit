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
  function fixBinary (bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
      arr[i] = bin.charCodeAt(i);
    }
    return buf;
  }
  var base64 = 
    "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB1klEQVR42n2TzytEURTHv3e8N1joRhZG" + 
    "zJsoCjsLhcw0jClKWbHwY2GnLGUlIfIP2IjyY2djZTHSMJNQSilFNkz24z0/Ms2MrnvfvMu8mcfZvPvu" + 
    "Pfdzz/mecwgKLNYKb0cFEgXbRvwV2s2HuWazCbzKA5LvNecDXayBjv9NL7tEpSNgbYzQ5kZmAlSXgsGG" + 
    "XmS+MjhKxDHgC+quyaPKQtoPYMQPOh5U9H6tBxF+Icy/aolqAqLP5wjWd5r/Ip3YXVILrF4ZRYAxDhCO" + 
    "J/yCwiMI+/xgjOEzmzIhAio04GeGayIXjQ0wGoAuQ5cmIjh8jNo0GF78QwNhpyvV1O9tdxSSR6PLl51F" + 
    "nIK3uQ4JJQME4sCxCIRxQbMwPNSjqaobsfskm9l4Ky6jvCzWEnDKU1ayQPe5BbN64vYJ2vwO7CIeLIi3" + 
    "ciYAoby0M4oNYBrXgdgAbC/MhGCRhyhCZwrcEz1Ib3KKO7f+2I4iFvoVmIxHigGiZHhPIb0bL1bQApFS" + 
    "9U/AC0ulSXrrhMotka/lQy0Ic08FDeIiAmDvA2HX01W05TopS2j2/H4T6FBVbj4YgV5+AecyLk+Ctvms" + 
    "QWK8WZZ+Hdf7QGu7fobMuZHyq1DoJLvUqQrfM966EU/qYGwAAAAASUVORK5CYII=";

  var binary = fixBinary(atob(base64));
  var blobDummy = new Blob([binary], {type: 'image/png'});

  // Save previewed poster in PNG
  const savePng = async () => {
    if (statusImage === "running") {
      console.log("Save to image already running");
      return;
    }
    setStatusImage("running");
    const canvas = await getCanvas();
    canvas.toBlob(blob => {
      try {
        saveAs(blobDummy, "avatar.png");
        setStatusImage("ready");
      } catch (e) {
        console.error(e);
        setStatusImage("error");
      }
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

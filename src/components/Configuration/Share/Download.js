import React, { useState } from "react";
import styled from "styled-components";
import ButtonMui from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ImageIcon from "@material-ui/icons/PhotoOutlined";
import PDFIcon from "@material-ui/icons/SaveOutlined";
import { saveAs } from "file-saver";
import { uploadPDFContent } from "../../../helpers/upload";
import getCanvas from "../../../helpers/getCanvas";

const Button = styled(ButtonMui).attrs({
  style: {
    marginBottom: "2rem"
  }
})``;

export default () => {
  const [statusImage, setStatusImage] = useState("ready");
  const [statusPDF, setStatusPDF] = useState("ready");

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
        saveAs(blob, "poster.png");
        setStatusImage("ready");
      } catch (e) {
        console.error(e);
        setStatusImage("error");
      }
    });
  };

  // Save previewed poster in PDF
  const savePdf = async () => {
    if (statusPDF === "running") {
      console.log("Save to PDF already running");
      return;
    }
    setStatusPDF("running");
    const canvas = await getCanvas();
    const imgData = canvas.toDataURL("image/jpeg");
    const url = await uploadPDFContent(imgData);
    if (url) {
      window.open(url, "_blank");
      setStatusPDF("ready");
    } else setStatusPDF("error");
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Button variant="contained" color="primary" onClick={savePng}>
        {statusImage === "ready"
          ? "Download in jpg"
          : statusImage === "error"
          ? "Error"
          : "Running..."}
        <ImageIcon style={{ marginLeft: "0.5rem" }} />
      </Button>
      <Button variant="contained" color="primary" onClick={savePdf}>
        {statusPDF === "ready"
          ? "Download in pdf"
          : statusPDF === "error"
          ? "Error"
          : "Running..."}
        <PDFIcon style={{ marginLeft: "0.5rem" }} />
      </Button>
    </Grid>
  );
};

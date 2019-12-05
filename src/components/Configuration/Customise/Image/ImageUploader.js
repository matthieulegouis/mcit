import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import Jimp from "jimp";
import BuilderContext from "../../../../contexts/builderContext";

const MAX_FILE_SIZE = 10000000;

const Uploader = styled.div`
  margin-bottom: 1rem;

  input[type="file"] {
    display: block;
    width: 66px;
    height: 25px;
    clip: rect(0px 0px 0px 0px);
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Label = styled.label`
  cursor: pointer;
  padding: 6px 2.5rem;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  background-color: #e0e0e0;
  margin: 0 0.5rem;

  ${({ hasFile }) =>
    hasFile &&
    css`
      color: white;
      background-color: #3f51b5;
    `}
`;

const Notice = styled.div`
  font-size: 0.8rem;
  color: #424242;
  margin: 1rem 0 0;
`;

export default ({
  name = "image",
  label = "Select file",
  notice,
  maxWidth
}) => {
  const { setBuilderConfig } = useContext(BuilderContext);
  const [btnText, setBtnText] = useState(label);
  const [hasFile, setHasFile] = useState(false);

  const getImage = event => {
    setBtnText("Uploading...");
    setBuilderConfig(name + "Low", "LOADING");
    setBuilderConfig(name, "LOADING");

    const files = event.target.files;
    if (files && files[0]) {
      if (files[0].size > MAX_FILE_SIZE) {
        setBtnText("File is too big");
        setTimeout(() => setBtnText(label), 5000);
        return;
      }
      const reader = new FileReader();
      reader.onload = e => {
        const base64Img = e.target.result;

        // Create image object and get width
        const uploadedImage = new Image();
        uploadedImage.src = base64Img;
        uploadedImage.onload = () => {
          // If image width is too big, resize image before save
          if (maxWidth && uploadedImage.width > maxWidth) {
            Jimp.read(base64Img).then(image => {
              image
                .scaleToFit(maxWidth, maxWidth)
                .getBase64Async(Jimp.MIME_PNG)
                .then(resizedImg => setBuilderConfig(name, resizedImg));
            });
          }
          // else, save it as uploaded
          else setBuilderConfig(name, base64Img);
          // Update button state when image is saved
          setHasFile(true);
          setBtnText(label);
        };

        // Resize image for preview
        Jimp.read(base64Img).then(image => {
          image
            .scaleToFit(480, 320)
            .getBase64Async(Jimp.MIME_PNG)
            .then(imageLow => setBuilderConfig(name + "Low", imageLow));
        });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <Uploader>
      <Label htmlFor={"uploader-" + name} hasFile={hasFile}>
        {btnText}
      </Label>
      <input
        type="file"
        accept="image/png, image/jpeg, image/gif"
        id={"uploader-" + name}
        autoComplete="off"
        onChange={getImage}
      />
      {notice && <Notice>10 MB limit. Allowed types: png, jpeg, gif</Notice>}
    </Uploader>
  );
};

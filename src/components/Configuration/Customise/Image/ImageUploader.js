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
  display: inline-block;
  cursor: pointer;
  padding: 8px;
  min-width: 30px;
  border-radius: 4px;
  background: #CF4520;
  color: #FFF;

  ${({ hasFile }) =>
    hasFile &&
    css`
      color: white;
      background-color: #CF4520;
    `}
`;

const FileName = styled.div`
  position: relative;
  display: inline-block;
  max-width: 300px;
  margin-left: 10px;
  padding: 8px;
  font-size: 0.8rem;
  color: #424242;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    max-width: 170px;
  }
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
  const [fileName, setfileName] = useState("");

  const getImage = event => {
    setBtnText("Uploading...");
    setBuilderConfig(name + "Low", "LOADING");
    setBuilderConfig(name, "LOADING");
    const files = event.target.files;
    if (files && files[0]) {
      const fileName = files[0].name;
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
                .cover(590, 590)
                .getBase64Async(Jimp.MIME_PNG)
                .then(resizedImg => setBuilderConfig(name, resizedImg));
            });
          }
          // else, save it as uploaded
          else {
            Jimp.read(base64Img).then(image => {
              image
                .cover(590, 590)
                .getBase64Async(Jimp.MIME_PNG)
                .then(resizedImg => setBuilderConfig(name, resizedImg));
            });
          }
          // Update button state when image is saved
          setHasFile(true);
          setBtnText("Change file");
          setfileName(fileName);
        };

        // Resize image for preview
        Jimp.read(base64Img).then(image => {
          image
            .cover(590, 590)
            .getBase64Async(Jimp.MIME_PNG)
            .then(imageLow => setBuilderConfig(name + "Low", imageLow));
        });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setHasFile(false);
      setBtnText(label);
      setfileName("");
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
      <FileName>{fileName}</FileName>
      {notice && <Notice>10 MB limit. Allowed types: png, jpeg, gif</Notice>}
    </Uploader>
  );
};

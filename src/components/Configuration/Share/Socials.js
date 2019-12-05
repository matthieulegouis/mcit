import React, { useContext, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "react-share/lib/TwitterIcon";
import FacebookIcon from "react-share/lib/FacebookIcon";
import ConfigContext from "../../../contexts/configContext";
import getCanvas from "../../../helpers/getCanvas";
import { uploadImage } from "../../../helpers/upload";

const Title = styled(Typography).attrs(() => ({
  variant: "h5",
  style: { margin: "2rem 0" }
}))`
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;

  & > * {
    cursor: pointer;
  }
`;

const Button = styled.div`
  margin: 0 1rem;
`;

const Error = styled.div`
  color: red;
  text-align: center;
`;

export default () => {
  const {
    constants: { socialText }
  } = useContext(ConfigContext);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const getImageURL = () =>
    new Promise(async (resolve, reject) => {
      if (imageUrl) return resolve(imageUrl);
      const canvas = await getCanvas();
      canvas.toBlob(async imageBlob => {
        const url = await uploadImage("social", "image/png", imageBlob);
        setImageUrl(url);
        resolve(url);
      });
    });

  const shareOnTwitter = async () => {
    try {
      const imageUrl = await getImageURL();
      window.open(
        `https://twitter.com/intent/tweet?text=${socialText}&url=${imageUrl}`,
        "_blank"
      );
      setError(null);
    } catch (e) {
      setError(e);
    }
  };

  const shareOnFacebook = async () => {
    try {
      const imageUrl = await getImageURL();
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${imageUrl}&quote=${socialText}`,
        "_blank"
      );
      setError(null);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div>
      <Title>Share on social networks</Title>
      <Buttons>
        <Button onClick={shareOnTwitter}>
          <TwitterIcon size={32} round />
        </Button>
        <Button onClick={shareOnFacebook}>
          <FacebookIcon size={32} round />
        </Button>
      </Buttons>
      {error && <Error>{error}</Error>}
    </div>
  );
};

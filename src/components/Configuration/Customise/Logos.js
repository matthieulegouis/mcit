import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Uploader from "./Image/ImageUploader";

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Notice = styled.div`
  font-size: 0.8rem;
  color: #424242;
  margin: 1rem 0 0;
`;

export default ({ name, title = "Logos", count = 4 }) => {
  const uploaders = Array.from(Array(count).keys()).map(
    item => `Upload logo ${item + 1}`
  );
  return (
    <>
      <Title>{title}</Title>
      <Logos>
        {uploaders &&
          uploaders.map((label, index) => (
            <Uploader
              key={index}
              name={`${name}${index}`}
              label={label}
              maxWidth={480}
            />
          ))}
      </Logos>
      <Notice>10 MB limit. Allowed types: png, jpeg, gif</Notice>
    </>
  );
};

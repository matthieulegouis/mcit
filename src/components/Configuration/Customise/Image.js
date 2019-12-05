import React, { useState } from "react";
import styled from "styled-components";
import BtnSelector from "./BtnSelector";
import Title from "./Title";
import Selector from "./Image/ImageSelector";
import Uploader from "./Image/ImageUploader";

const Block = styled.div``;

export default ({ name, title = "Select an image" }) => {
  const [messageType, setMessageType] = useState(0);

  return (
    <Block>
      <Title>{title}</Title>
      <BtnSelector
        items={["Ready made", "Custom"]}
        selected={messageType}
        setSelection={setMessageType}
      />
      {messageType === 0 && <Selector name={name} />}
      {messageType === 1 && <Uploader name={name} notice />}
    </Block>
  );
};

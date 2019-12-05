import React, { useState } from "react";
import styled from "styled-components";
import MessageSelector from "./Message/MessageSelector";
import MessageCustom from "./Message/MessageCustom";
import BtnSelector from "./BtnSelector";
import Title from "./Title";

const Block = styled.div``;

export default ({ name, title = "Select message" }) => {
  const [messageType, setMessageType] = useState(0);

  return (
    <Block>
      <Title>{title}</Title>
      <BtnSelector
        items={["Ready made", "Custom"]}
        selected={messageType}
        setSelection={setMessageType}
      />
      {messageType === 0 && <MessageSelector name={name} />}
      {messageType === 1 && (
        <>
          <MessageCustom name={name + "_top"} label="Top message" />
          <MessageCustom name={name + "_bottom"} label="Bottom message" />
        </>
      )}
    </Block>
  );
};

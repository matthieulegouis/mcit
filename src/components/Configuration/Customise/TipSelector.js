import React, { useContext } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import FormControlMui from "@material-ui/core/FormControl";
import ConfigContext from "../../../contexts/configContext";
import BuilderContext from "../../../contexts/builderContext";
import Title from "./Title";
import useLang from "../../../helpers/useLang";

const FormControl = styled(FormControlMui).attrs(() => ({
  style: { maxWidth: "20rem", width: "100%" }
}))``;

const Item = styled(MenuItem).attrs(() => ({
  style: { whiteSpace: "normal" }
}))``;

export default ({ name, title }) => {
  const { customise } = useContext(ConfigContext);
  const { builderConfig, setBuilderConfig } = useContext(BuilderContext);

  if (!customise.messages[name]) {
    console.log(`No message types in config for ${name}`);
    return null;
  }

  const messages = useLang(customise.messages[name]);
  const value = builderConfig[name] ? builderConfig[name].name || "" : "";

  return (
    <>
      {title && <Title>{title}</Title>}
      <FormControl fullWidth>
        <InputLabel htmlFor={"messageType-" + name}>
          Select a ready made message
        </InputLabel>
        <Select
          value={value}
          onChange={e =>
            setBuilderConfig(
              name,
              messages.find(tip => tip.name === e.target.value)
            )
          }
          inputProps={{ id: "messageType-" + name }}
        >
          {messages &&
            messages.map((message, index) => (
              <Item key={index} value={message.name}>
                {message.name}
              </Item>
            ))}
        </Select>
      </FormControl>
    </>
  );
};

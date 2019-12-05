import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import BuilderContext from "../../../contexts/builderContext";
import useDebounce from "../../../helpers/useDebounce";
import Title from "./Title";

const Block = styled.div``;

const Text = styled(TextField)`
  width: 25rem;
  max-width: 100%;
`;

const Notice = styled.div`
  font-size: 0.8rem;
  color: #424242;
  margin-top: 0.5rem;
  width: 25rem;
  max-width: 100%;
  text-align: left;
`;

export default ({ name, title = "Type your text", maxChars = 100 }) => {
  const { builderConfig, setBuilderConfig } = useContext(BuilderContext);
  const [debouncedText, debouncedSetText] = useDebounce(builderConfig[name]);

  useEffect(() => setBuilderConfig(name, debouncedText), [
    debouncedText,
    name,
    setBuilderConfig
  ]);

  return (
    <Block>
      <Title>{title}</Title>
      <Text
        onChange={e => {
          e.persist();
          debouncedSetText(e.target.value.slice(0, maxChars));
        }}
        variant="outlined"
        defaultValue={builderConfig[name] || ""}
      />
      <Notice>Maximum {maxChars} characters</Notice>
    </Block>
  );
};

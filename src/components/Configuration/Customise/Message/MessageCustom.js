import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import useDebounce from "../../../../helpers/useDebounce";
import BuilderContext from "../../../../contexts/builderContext";

const Textarea = styled(TextField).attrs(props => ({
  style: { marginTop: "1rem" }
}))`
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

export default ({ name, maxChars = 100, label = "Type your text" }) => {
  const { builderConfig, setBuilderConfig } = useContext(BuilderContext);
  const [debouncedText, debouncedSetText] = useDebounce(builderConfig[name]);

  useEffect(() => setBuilderConfig(name, debouncedText), [
    debouncedText,
    name,
    setBuilderConfig
  ]);

  return (
    <>
      <Textarea
        multiline
        rowsMax="5"
        defaultValue={builderConfig[name] || ""}
        onChange={e => {
          e.persist();
          debouncedSetText(e.target.value.slice(0, maxChars));
        }}
        variant="outlined"
      />
      <Notice>Maximum {maxChars} characters</Notice>
    </>
  );
};

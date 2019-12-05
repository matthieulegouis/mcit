import React, { useContext } from "react";
import styled from "styled-components";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ConfigContext from "../../../contexts/configContext";
import BuilderContext from "../../../contexts/builderContext";
import Title from "./Title";

// Country flags
import frFlag from "../../../assets/langs/fr.png";
import enFlag from "../../../assets/langs/en.png";
import deFlag from "../../../assets/langs/de.png";
const flags = { fr: frFlag, en: enFlag, de: deFlag };

const Langs = styled(RadioGroup)`
  display: flex;
  justify-content: center;
`;

const Flag = styled.img`
  width: 2rem;
  height: auto;
`;

const Choice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  &:first-child {
    padding-left: 0;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }
`;

const Lang = ({ id, name }) => (
  <Choice>
    <Flag src={flags[id]} alt={name} />
    <FormControlLabel
      value={id}
      control={<Radio color="primary" />}
      label={name}
    />
  </Choice>
);

export default ({ title = "Language" }) => {
  const { languages } = useContext(ConfigContext);
  const { builderConfig, setBuilderConfig } = useContext(BuilderContext);

  return (
    <>
      <Title>{title}</Title>
      <FormControl>
        <Langs
          row
          value={builderConfig.lang || languages[0].id}
          onChange={event => setBuilderConfig("lang", event.target.value)}
        >
          {languages && languages.map(lang => <Lang key={lang.id} {...lang} />)}
        </Langs>
      </FormControl>
    </>
  );
};

import React, { useContext } from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import LanguageSelector from "./Customise/LanguageSelector";
import Image from "./Customise/Image";
import InputText from "./Customise/InputText";
import Logos from "./Customise/Logos";
import HeaderMessage from "./Customise/HeaderMessage";
import TipSelector from "./Customise/TipSelector";
import BuilderContext from "../../contexts/builderContext";

const Block = styled(Container)`
  margin-top: -2rem;
`;

export default () => {
  const {
    builderConfig: { layout }
  } = useContext(BuilderContext);

  if (layout === "poster-tabloid" || layout === "poster-letter")
    return (
      <Block>
        <LanguageSelector />
        <HeaderMessage name="headerMessage" title="Header message" />
        <Image name="background" title="Select background" />
        <TipSelector name="tip" title="Select tip message" />
        <InputText name="info" title="Campaign info" maxChars={350} />
        <InputText name="phone" title="Telephone" maxChars={20} />
        <Logos name="logo" />
      </Block>
    );
  else if (layout === "social-post") {
    return (
      <Block>
        <Logos name="logo" count={2} />
      </Block>
    );
  } else return null;
};

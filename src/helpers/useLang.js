import { useState, useContext, useEffect } from "react";
import ConfigContext from "../contexts/configContext";
import BuilderContext from "../contexts/builderContext";

export default messages => {
  const { languages } = useContext(ConfigContext);
  const { builderConfig } = useContext(BuilderContext);
  const [langMessages, setLangMessages] = useState(messages.en);

  useEffect(() => {
    // Get selected lang in builder config (or first one)
    const lang =
      languages.find(l => l.id === builderConfig.lang) || languages[0];
    if (messages.hasOwnProperty(lang)) setLangMessages(messages[lang]);
  }, [setLangMessages, builderConfig.lang, languages, messages]);

  return langMessages;
};

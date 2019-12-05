import React, { useContext } from "react";
import BuilderContext from "../../contexts/builderContext";
import Download from "./Share/Download";
import Socials from "./Share/Socials";

export default () => {
  const {
    builderConfig: { layout }
  } = useContext(BuilderContext);

  if (["poster-tabloid", "poster-letter"].includes(layout)) {
    return <Download />;
  } else if (["social-post"].includes(layout)) {
    return <Socials />;
  }
};

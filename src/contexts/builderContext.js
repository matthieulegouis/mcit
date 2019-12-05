import { createContext } from "react";
import defaultConfig from "../config/defaultBuilderConfig.json";
const BuilderContext = createContext(defaultConfig);
export default BuilderContext;

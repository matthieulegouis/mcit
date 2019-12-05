import { useState } from "react";
import debounce from "lodash.debounce";

export default defaultValue => {
  const [text, setText] = useState(defaultValue || "");
  const debouncedSetText = debounce(setText, 500, { maxWait: 4000 });
  return [text, debouncedSetText];
};

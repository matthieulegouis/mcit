import React, { useContext } from "react";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlMui from "@material-ui/core/FormControl";
import ConfigContext from "../../../../contexts/configContext";
import BuilderContext from "../../../../contexts/builderContext";

const FormControl = styled(FormControlMui)`
  width: 13rem;
  max-width: 100%;
`;

const MenuImage = styled.img`
  width: 13rem;
  max-width: 100%;
  height: auto;
`;

export default ({ name }) => {
  const { customise } = useContext(ConfigContext);
  const { builderConfig, setBuilderConfig } = useContext(BuilderContext);

  const images = customise.images ? customise.images[name] : [];

  // Set value of Select
  const setValue = () => {
    // Check if current image is custom one or selected one
    const isCustomImage = !images.find(
      img =>
        img.url === builderConfig[name] ||
        img.url ===
          builderConfig[name + "Low"].replace("/images/Low", "/images")
    );
    // If image is custome one, set value as unselected
    if (isCustomImage) return "";
    // If there is no high quality image loaded, use low quality
    if (builderConfig[name] === "" || builderConfig[name] === "LOADING") {
      return builderConfig[name + "Low"]
        ? builderConfig[name + "Low"].replace("/images/Low", "/images")
        : "";
    }
    return builderConfig[name] || "";
  };
  const value = setValue();

  // Function: load image and update builder config
  const loadImage = (ImgSrc, name) => {
    const image = new Image();
    image.onload = () => {
      setBuilderConfig(name, process.env.PUBLIC_URL + ImgSrc);
    };
    image.src = ImgSrc;
  };

  const onChange = event => {
    // Set loader on preview
    setBuilderConfig(name, "LOADING");
    setBuilderConfig(name + "Low", "LOADING");
    // Load low quality image for preview
    loadImage(
      event.target.value.replace("/images", "/images/Low"),
      name + "Low"
    );
    // Load hight quality image for render
    loadImage(event.target.value, name);
  };

  return (
    <FormControl>
      <InputLabel htmlFor={"image-" + name}>Select an image</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        inputProps={{ id: "image-" + name }}
      >
        {images &&
          images.map(({ name, url }) => (
            <MenuItem key={url} value={url}>
              <MenuImage
                src={url.replace("/images", "/images/Low")}
                alt={name}
              />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

import React from "react";
import styled from "styled-components";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Choice = styled.div`
  margin-bottom: 2rem;
`;

const Image = styled.img`
  display: block;
  width: 20px;
  margin: auto;
`;

export default ({ id, name, image }) => (
  <Choice>
    <Image src={image} />
    <FormControlLabel
      value={id}
      control={<Radio color="primary" />}
      label={name}
      labelPlacement="bottom"
    />
  </Choice>
);

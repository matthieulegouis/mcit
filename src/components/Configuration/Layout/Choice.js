import React from "react";
import styled, { css } from "styled-components";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Choice = styled.div`
  margin-bottom: 2rem;
`;

const Image = styled.img`
  display: block;
  width: 20px;
  margin: auto;
  ${({ large }) => {
    if (large) {
      return css`
        width: 100px;
      `;
    }
  }}
`;

export default ({ id, name, image, large }) => (
  <Choice>
    <Image large={large} src={image} />
    <FormControlLabel
      value={id}
      control={<Radio color="primary" />}
      label={name}
      labelPlacement="bottom"
    />
  </Choice>
);

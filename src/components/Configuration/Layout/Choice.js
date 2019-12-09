import React from "react";
import styled, { css } from "styled-components";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Choice = styled.div`
  position: relative;
  margin-bottom: 2rem;
  text-align: center;
  cursor: pointer;
`;

const Image = styled.img`
  display: block;
  width: 35px;
  margin: auto;
  ${({ large }) => {
    if (large) {
      return css`
        width: 100px;
      `;
    }
  }}
`;

const Label = styled.div`
  position: absolute;
  top: 75px;
  left: 0;
  right: 0;
  cursor: pointer;
  ${({ large }) => {
    if (large) {
      return css`
        top: 140px;
      `;
    }
  }}
`;

export default ({ id, name, image, large }) => (
  <Choice>
    <FormControlLabel
      value={id}
      control={<Radio color="primary" />}
      icon={<div>1</div>}
      label={<><Image large={large} src={image} /><Label large={large}>{name}</Label></>}
      labelPlacement="top"
    />
  </Choice>
);

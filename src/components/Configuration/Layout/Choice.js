import React from "react";
import styled, { css } from "styled-components";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Choice = styled.div`
  position: relative;
  margin-bottom: 2rem;
  text-align: center;
  cursor: pointer;
  ${({ label }) => {
    if (label) {
      return css`
        padding-bottom: 2.5rem;
      `;
    }
  }}
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
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  color: #555;
  cursor: pointer;
  ${({ large }) => {
    if (large) {
      return css`
        top: 145px;
      `;
    }
  }}
`;

export default ({ id, name, image, large }) => (
  <Choice label={name}>
    <FormControlLabel
      value={id}
      control={<Radio color="primary" />}
      icon={<div>1</div>}
      label={
        <>
          {image ? <Image large={large} src={image} /> : null}
          {name ? <Label large={large}>{name}</Label> : null}
        </>
      }
      labelPlacement="top"
    />
  </Choice>
);

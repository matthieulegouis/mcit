import React from "react";
import styled, { css } from "styled-components";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Choice = styled.div`
  position: relative;
  margin: 0;
  margin-bottom: 2rem;
  text-align: center;
  cursor: pointer;
  ${({ label }) => {
    if (label) {
      return css`
        margin: 0;
        padding-bottom: 4.5rem;
      `;
    }
  }}
`;

const Image = styled.img`
  display: block;
  width: 35px;
  margin: auto;
  @media (max-width: 768px) {
    width: 28px;
  }
  ${({ large }) => {
    if (large) {
      return css`
        width: 100px;
        @media (max-width: 768px) {
          width: 70px;
        }
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
  font-family: "sans1898";
  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 12px;
  }
  ${({ large }) => {
    if (large) {
      return css`
        top: 145px;
        @media (max-width: 768px) {
          top: 110px;
        }
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

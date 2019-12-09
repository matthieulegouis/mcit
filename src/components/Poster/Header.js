import React from "react";
import styled, { css } from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Header = styled.div`
  width: 100%;
  height: 100%;
  background: #303030;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  display: block;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150pt;
  line-height: 150pt;
  color: #000;
  background: #FFF;
  font-size: 100pt;
  font-weight: 700;
  text-align: center;
  ${({ layout }) => {
    if (layout === "layout1") {
      return css`
        display: none;
      `;
    }
    if (layout === "layout2") {
      return css`
      background: #FFF !important;
      `;
    }
    if (layout === "layout3") {
      return css`
        color: #FFF;
      `;
    }
  }}
  ${({ layout3Color }) => {
    if (layout3Color === "color1") {
      return css`
        background: rgba(179, 27, 27, 0.5);
      `;
    } 
    if (layout3Color === "color2") {
      return css`
        background: rgba(207, 69, 32, 0.5);
      `;
    } 
    if (layout3Color === "color3") {
      return css`
        background: rgba(232, 119, 34, 0.5);
      `;
    } 
    if (layout3Color === "color4") {
      return css`
        background: rgba(255, 199, 44, 0.5);
      `;
    } 
  }}
`;

const Avatar = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 100%;
  height: 100%;
  background-color: #303030;
  ${({ background }) =>
    background !== "LOADING" && css`background-image: url("${background}");`}
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 50%;

  ${({ layout }) => {
    if (layout === "layout1") {
      return css`
        border: 20pt solid #FFF;
      `;
    }
    if (layout === "layout2" || layout === "layout3") {
      return css`
        border: 10pt solid #FFF !important;
      `;
    } 
  }}

  ${({ layout1Color }) => {
    if (layout1Color === "color1") {
      return css`
        border-color: rgba(179, 27, 27, 1) rgba(179, 27, 27, 1) rgba(255, 199, 44, 1) rgba(255, 199, 44, 1);
     `;
    }
    if (layout1Color === "color2") {
      return css`
        border-color: rgba(207, 69, 32, 1)  rgba(207, 69, 32, 1) rgba(255, 199, 44, 1) rgba(255, 199, 44, 1);
     `;
    } 
    if (layout1Color === "color3") {
      return css`
        border-color: rgba(207, 69, 32, 1)  rgba(207, 69, 32, 1) rgba(179, 27, 27, 1) rgba(179, 27, 27, 1);
     `;
    } 
    if (layout1Color === "color4") {
      return css`
        border-color: rgba(255, 199, 44, 1)  rgba(255, 199, 44, 1) rgba(179, 27, 27, 1) rgba(179, 27, 27, 1);
     `;
    } 
    if (layout1Color === "color5") {
      return css`
        border-color: rgba(179, 27, 27, 1) rgba(207, 69, 32, 1) rgba(232, 119, 34, 1) rgba(255, 199, 44, 1);
      `;
    } 
  }}
`;

const Spinner = styled(CircularProgress)`
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 75px);
`;

export default ({
  preview,
  background = "",
  backgroundLow,
  layout,
  layout1Color,
  layout3Color
}) => {
  const backgroundImg = preview ? backgroundLow || background : background;
  const isLoading = backgroundImg === "LOADING";

  return (
    <Header>
      <Avatar background={backgroundImg} layout={layout} layout1Color={layout1Color} layout3Color={layout3Color}>
        <Logo layout={layout} layout1Color={layout1Color} layout3Color={layout3Color}>WCM</Logo>
      </Avatar>
      {isLoading && <Spinner size={150} />}
    </Header>
  );
};

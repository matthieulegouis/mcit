import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 590px;
  height: 590px;
  background: transparent;
  border-radius: 50%;
`;
const Avatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 590px;
  height: 590px;
  background-color: #303030;
  border-radius: 50%;
`;
const IMGAVATAR = styled.img`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  display: block;
  ${({ orientation }) => {
    if (orientation === "vertical") {
      return css`
        width: 100%;
        height: auto;
      `;
    }
    if (orientation === "horizontal") {
      return css`
        width: auto;
        height: 100%;
      `;
    }
  }}
`
const Logo = styled.div`
  display: block;
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;
  height: 190px;
  line-height: 190px;
  background: #fff;
  text-align: center;
  ${({ layout }) => {
    if (layout === "layout1") {
      return css`
        display: none;
      `;
    }
    if (layout === "layout2") {
      return css`
        background: #fff !important;
      `;
    }
  }}
  ${({ layout3Color }) => {
    if (layout3Color === "color1") {
      return css`
        background: rgba(179, 27, 27, 0.7);
      `;
    }
    if (layout3Color === "color2") {
      return css`
        background: rgba(207, 69, 32, 0.7);
      `;
    }
    if (layout3Color === "color3") {
      return css`
        background: rgba(232, 119, 34, 0.7);
      `;
    }
    if (layout3Color === "color4") {
      return css`
        background: rgba(255, 199, 44, 0.7);
      `;
    }
  }}
`;
const IMG = styled.img`
  display: block;
  width: 270px;
  margin: 23px auto 0;
`
const CircleIMG = styled.img`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 590px;
  height: 590px;
`;
const Spinner = styled(CircularProgress)`
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 75px);
`;

export default ({preview, background = "", backgroundLow, layout, layout1Color, layout3Color }) => {
  let avatar = null;
  const [orientation, setOrientation] = useState("");
  const backgroundImg = preview ? backgroundLow || background : background;
  const isLoading = backgroundImg === "LOADING";
  useEffect(() => {
    if (avatar) {
      if (avatar.width / avatar.height < 1) {
        setOrientation("vertical");
      } else {
        setOrientation("horizontal");
      }
    }
  });
console.log("layout", layout)
  return (
    <Header>
      <Avatar>
        {isLoading ? null : <IMGAVATAR src={background} orientation={orientation} ref={el => (avatar = el)} />}
        <Logo
          layout={layout}
          layout1Color={layout1Color}
          layout3Color={layout3Color}
        >
          {layout === "layout2" ? <IMG src="/images/logos/logo-wcm.png" /> : null}
          {layout === "layout3" ? <IMG src="/images/logos/logo-wcm-white.png" /> : null}
        </Logo>
 
        {layout === "layout2" || layout === "layout3" ? <CircleIMG src="/images/circles/circle0.png"></CircleIMG> : null}
        {layout === "layout1" && layout1Color === "color1" ? <CircleIMG src="/images/circles/circle1.png"></CircleIMG> : null}
        {layout === "layout1" && layout1Color === "color2" ? <CircleIMG src="/images/circles/circle2.png"></CircleIMG> : null}
        {layout === "layout1" && layout1Color === "color3" ? <CircleIMG src="/images/circles/circle3.png"></CircleIMG> : null}
        {layout === "layout1" && layout1Color === "color4" ? <CircleIMG src="/images/circles/circle4.png"></CircleIMG> : null}
        {layout === "layout1" && layout1Color === "color5" ? <CircleIMG src="/images/circles/circle5.png"></CircleIMG> : null}
        
      </Avatar>
      {isLoading && <Spinner size={150} />}
    </Header>
  );
};

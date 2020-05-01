import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Header = styled.div`
  width: 590px;
  height: 590px;
  background: transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
`;

const CircleIMG = styled.img`
  position: absolute;
  z-index: 10000000;
  top: 0;
  left: 0;
  width: 590px;
  height: 590px;
`;

const Logo = styled.div`
  display: block;
  position: absolute;
  z-index: 1;
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

const IMGAVATAR = styled.img`
  position: absolute;
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

const IMG = styled.img`
  display: block;
  width: 180px;
  margin: auto;
  max-width: 100%;
`

const IMGCONTAINER = styled.div`
  display: block;
  width: 350px;
  margin: 40px auto 0;
`

const Avatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 590px;
  height: 590px;
  background-color: #303030;
  overflow: hidden;
  border-radius: 50%;
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
      <Avatar
        layout={layout}
        layout1Color={layout1Color}
        layout3Color={layout3Color}
      >
        {isLoading ? null : <IMGAVATAR src={background} orientation={orientation} ref={el => (avatar = el)} />}
        <Logo
          layout={layout}
          layout1Color={layout1Color}
          layout3Color={layout3Color}
        >
          {layout === "layout2" ? <IMGCONTAINER><IMG src="/images/logo-wcm.png" /></IMGCONTAINER> : null}
          {layout === "layout3" ? <IMGCONTAINER><IMG src="/images/logo-wcm-white.png" /></IMGCONTAINER> : null}
        </Logo>
 
        {layout === "layout2" || layout === "layout3" ? <CircleIMG src="/images/circle0.png"></CircleIMG> : null}
        {layout === "layout1" && layout1Color === "color1" ? <CircleIMG src="/images/circle1.png"></CircleIMG> : null}
        {layout === "layout1" && layout1Color === "color2" ? <CircleIMG src="/images/circle2.png"></CircleIMG> : null}
        {layout === "layout1" && layout1Color === "color3" ? <CircleIMG src="/images/circle3.png"></CircleIMG> : null}
        {layout === "layout1" && layout1Color === "color4" ? <CircleIMG src="/images/circle4.png"></CircleIMG> : null}
        {layout === "layout1" && layout1Color === "color5" ? <CircleIMG src="/images/circle5.png"></CircleIMG> : null}
        
      </Avatar>
      {isLoading && <Spinner size={150} />}
    </Header>
  );
};

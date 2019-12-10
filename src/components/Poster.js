import React, { useContext, useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import ConfigContext from "../contexts/configContext";
import BuilderContext from "../contexts/builderContext";
import Header from "./Poster/Header";

const Wrapper = styled.div`
  ${({ preview }) =>
    preview &&
    css`
      max-width: calc(100vw - 1rem);
      margin: 0 auto;
      height: ${({ height }) => height || 0}px;
    `}

  ${({ mobile, width, scale }) =>
    mobile &&
    css`
      position: relative;
      left: calc(50% - ${(width * scale) / 2 + 8}px);
    `}
`;

const Poster = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ width, ratio }) => width * ratio}px;
  background-color: transparent;
  transition: transform 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${({ preview, scale }) =>
    preview &&
    css`
      transform: scale(${scale});
      transform-origin: top left;
    `}
`;

export default ({ preview, mobile }) => {
  const { layouts } = useContext(ConfigContext);
  const { builderConfig } = useContext(BuilderContext);
  const wrapperRef = useRef(null);

  let layout = layouts.find(l => l.id === builderConfig.layout);
  if (!layout) layout = builderConfig.layout[0];
  const [scale, setScale] = useState(0.1);

  if (preview)
    useEffect(() => {
      if (mobile) {
        const parentHeight = window.innerHeight;
        const parentWidth = window.innerWidth;
        const windowRatio = parentHeight / parentWidth;
        if (windowRatio < layout.ratio)
          setScale(parentHeight / (layout.width * layout.ratio));
        else setScale(parentWidth / layout.width);
      } else {
        const parentWidth = wrapperRef.current.clientWidth;
        setScale(parentWidth / layout.width);
      }
    }, [scale, layout, mobile]);

    return (
      <Wrapper
        ref={wrapperRef}
        preview={preview}
        width={layout.width}
        height={layout.width * layout.ratio * scale}
        scale={scale}
        mobile={mobile}
      >
        <Poster preview={preview} {...layout} scale={scale}>
          <Header {...builderConfig} preview={preview} />
        </Poster>
      </Wrapper>
    );
    
};

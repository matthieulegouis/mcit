import React, { useContext, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import ConfigContext from "../contexts/configContext";
import BuilderContext from "../contexts/builderContext";
import Header from "./Poster/Header";

const Wrapper = styled.div`
  ${({ preview, ratio }) =>
    preview &&
    css`
      width: ${({ width }) => width}px;
      height: ${({ width, ratio }) => width * ratio}px;
      margin: 0 auto;
      transform: scale(0.4);
    `}

  ${({ mobile }) =>
    mobile &&
    css`
      position: relative;
      max-width: 100%;
      transform: scale(0.5);
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
  margin: auto;

  ${({ preview }) =>
    preview &&
    css`
      transform-origin: top left;
    `}
`;

export default ({ preview, mobile }) => {
  const { layouts } = useContext(ConfigContext);
  const { builderConfig } = useContext(BuilderContext);
  const wrapperRef = useRef(null);

  let layout = layouts.find(l => l.id === builderConfig.layout);
  if (!layout) layout = builderConfig.layout[0];

  if (preview)
    useEffect(() => {
      if (mobile) {
        const parentHeight = window.innerHeight;
        const parentWidth = window.innerWidth;
        const windowRatio = parentHeight / parentWidth;
      } else {
        const parentWidth = wrapperRef.current.clientWidth;
      }
    }, [layout, mobile]);

    return (
      <Wrapper
        ref={wrapperRef}
        preview={preview}
        width={layout.width}
        height={layout.width * layout.ratio}
        mobile={mobile}
        {...layout}
      >
        <Poster preview={preview} {...layout}>
          <Header {...builderConfig} preview={preview} />
        </Poster>
      </Wrapper>
    );
    
};

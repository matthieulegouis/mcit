import React from "react";
import styled, { css } from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Header = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 100%;
  background-color: #9e9e9e;
  ${({ background }) =>
    background !== "LOADING" && css`background-image: url("${background}");`}
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  transition: all 0.3s ease;

  /* Default sizes are for poster-tabloid layout */
  font-size: 60pt;
  line-height: 53pt;
  padding: 40pt;

  ${({ layout }) => {
    if (layout === "poster-letter") {
      return css`
        font-size: 44pt;
        line-height: 40pt;
      `;
    }
  }}
`;

const Text = styled.div`
  font-weight: bold;
  color: white;
`;

const TextTop = styled.div`
  display: flex;

  div {
    padding-left: 25pt;
    padding-right: 45pt;
    margin-top: -5pt;
  }

  ${({ layout }) => {
    if (layout === "poster-letter") {
      return css`
        div {
          padding-right: 180pt;
          margin-top: 0;
        }
      `;
    }
  }}
`;

const TextBottom = styled.div`
  display: flex;
  align-items: flex-end;
  align-self: flex-end;
  text-align: right;

  div {
    padding-right: 25pt;
    padding-left: 140pt;
  }

  ${({ layout }) => {
    if (layout === "poster-letter") {
      return css`
        div {
          padding-left: 135pt;
        }
      `;
    }
  }}
`;

const Arrow = styled.img.attrs(props => ({
  src: "/svg/arrow_blue.svg"
}))`
  width: 156pt;
  height: 156pt;
  min-width: 156pt;
  min-height: 156pt;
  color: #4569ba;

  ${({ layout }) => {
    if (layout === "poster-letter") {
      return css`
        width: 120pt;
        height: 120pt;
        min-width: 120pt;
        min-height: 120pt;
      `;
    }
  }}
`;

const ArrowTopLeft = styled(Arrow)`
  transform: rotate(90deg);
`;

const ArrowBottomRight = styled(Arrow)`
  transform: rotate(-90deg);
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
  headerMessage = ["", ""],
  layout
}) => {
  const backgroundImg = preview ? backgroundLow || background : background;
  const isLoading = backgroundImg === "LOADING";

  return (
    <Header background={backgroundImg} layout={layout}>
      <TextTop layout={layout}>
        <ArrowTopLeft layout={layout} />
        <Text>{headerMessage[0]}</Text>
      </TextTop>
      <TextBottom layout={layout}>
        <Text>{headerMessage[1]}</Text>
        <ArrowBottomRight layout={layout} />
      </TextBottom>
      {isLoading && <Spinner size={150} />}
    </Header>
  );
};

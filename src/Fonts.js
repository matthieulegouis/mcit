import { createGlobalStyle } from "styled-components";

// Fonts
import FontBoldTTF from "./fonts/1898sans-bold.ttf";
import FontBoldWOFF from "./fonts/1898sans-bold.woff";
import FontBoldWOFF2 from "./fonts/1898sans-bold.woff2";

import FontBoldItalicTTF from "./fonts/1898sans-bolditalic.ttf";
import FontBoldItalicWOFF from "./fonts/1898sans-bolditalic.woff";
import FontBoldItalicWOFF2 from "./fonts/1898sans-bolditalic.woff2";

import FontItalicTTF from "./fonts/1898sans-italic.ttf";
import FontItalicWOFF from "./fonts/1898sans-italic.woff";
import FontItalicWOFF2 from "./fonts/1898sans-italic.woff2";

import FontLightTTF from "./fonts/1898sans-light.ttf";
import FontLightWOFF from "./fonts/1898sans-light.woff";
import FontLightWOFF2 from "./fonts/1898sans-light.woff2";

import FontLightItalicTTF from "./fonts/1898sans-lightitalic.ttf";
import FontLightItalicWOFF from "./fonts/1898sans-lightitalic.woff";
import FontLightItalicWOFF2 from "./fonts/1898sans-lightitalic.woff2";

import FontTTF from "./fonts/1898sans-regular.ttf";
import FontWOFF from "./fonts/1898sans-regular.woff";
import FontWOFF2 from "./fonts/1898sans-regular.woff2";

const Fonts = createGlobalStyle `
    @font-face {
      font-family: 'sans1898';
      src: url(${FontBoldWOFF2}) format('woff2'),
           url(${FontBoldWOFF}) format('woff'),
           url(${FontBoldTTF}) format('truetype');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'sans1898';
      src: url(${FontBoldItalicWOFF2}) format('woff2'),
           url(${FontBoldItalicWOFF}) format('woff'),
           url(${FontBoldItalicTTF}) format('truetype');
      font-weight: 700;
      font-style: italic;
    }
    @font-face {
      font-family: 'sans1898';
      src: url(${FontItalicWOFF2}) format('woff2'),
           url(${FontItalicWOFF}) format('woff'),
           url(${FontItalicTTF}) format('truetype');
      font-weight: normal;
      font-style: italic;
    }
    @font-face {
      font-family: 'sans1898';
      src: url(${FontLightWOFF2}) format('woff2'),
           url(${FontLightWOFF}) format('woff'),
           url(${FontLightTTF}) format('truetype');
      font-weight: normal;
      font-style: 300;
    }
    @font-face {
      font-family: 'sans1898';
      src: url(${FontLightItalicWOFF2}) format('woff2'),
           url(${FontLightItalicWOFF}) format('woff'),
           url(${FontLightItalicTTF}) format('truetype');
      font-weight: 300;
      font-style: italic;
    }
    @font-face {
      font-family: 'sans1898';
      src: url(${FontWOFF2}) format('woff2'),
           url(${FontWOFF}) format('woff'),
           url(${FontTTF}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
`;

export default Fonts;
import { createGlobalStyle } from "styled-components";

// Fonts
import FontBoldOTF from "./fonts/UberMove-Bold.otf";
import FontBoldTTF from "./fonts/UberMove-Bold.ttf";
import FontLightOTF from "./fonts/UberMove-Light.otf";
import FontLightTTF from "./fonts/UberMove-Light.ttf";
// import FontMediumOTF from "./fonts/UberMove-Medium.otf";
// import FontMediumTTF from "./fonts/UberMove-Medium.ttf";
import FontRegularOTF from "./fonts/UberMove-Regular.otf";
import FontRegularTTF from "./fonts/UberMove-Regular.ttf";

const Fonts = createGlobalStyle`
    @font-face {
        font-family: UberMove;
        src: url(${FontRegularOTF}) format("opentype"),
            url(${FontRegularTTF}) format("truetype");
        font-weight: normal;
    }  

    @font-face {
        font-family: UberMove;
        src: url(${FontLightOTF}) format("opentype"),
            url(${FontLightTTF}) format("truetype");
        font-weight: lighter;
    }  

    @font-face {
        font-family: UberMove;
        src: url(${FontBoldOTF}) format("opentype"),
            url(${FontBoldTTF}) format("truetype");
        font-weight: bold;
    } 
`;

export default Fonts;

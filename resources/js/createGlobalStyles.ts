import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SF Pro';
        src: url('/fonts/SF/SF-Pro-Display-Regular.otf') format("opentype");
        font-weight: 400;
    }
    @font-face {
        font-family: 'SF Pro';
        src: url('/fonts/SF/SF-Pro-Display-Light.otf') format("opentype");
        font-weight: 300;
    }
    @font-face {
        font-family: 'SF Pro';
        src: url('/fonts/SF/SF-Pro-Display-Thin.otf') format("opentype");
        font-weight: 200;
    }
    @font-face {
        font-family: 'SF Pro';
        src: url('/fonts/SF/SF-Pro-Display-Ultralight.otf') format("opentype");
        font-weight: 100;
    }
    @font-face {
        font-family: 'SF Pro';
        src: url('fonts/SF/SF-Pro-Display-Bold.otf') format("opentype");
        font-weight: 700;
    }
    body {
        margin: 0;
        display: block;
        font-size: 18px;
    }
    html {
        scroll-behaviour: smooth;
    }
    * {
        font-family: 'SF Pro', sans-serif;
        font-weight: 400;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: black;
    }
    button {
        border: 0;
    }
    section {
        padding: 160px 0;
        position: relative;
    }
    @media screen and (max-width: 960px) {
        section {
            padding: 40px 0
        }
    }
    img {
        max-width: 100%;
        vertical-align: middle;
        display: inline-block;
        border: 0;
    }
`;

export default GlobalStyle;

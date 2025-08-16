import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* 1. Use a more-intuitive box-sizing model */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
}

body {
  /* 4. Add accessible line-height */
  line-height: 1.5;
  /* 5. Improve text rendering */
  -webkit-font-smoothing: antialiased;
}

/* 6. Improve media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 7. Inherit fonts for form controls */
input, button, textarea, select {
  font: inherit;
}

/* 8. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/*
  10. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
@font-face {
  font-family: "digital-clock-font";
  src: url('../public/digital-7/digital-7.ttf');
}
@font-face {
  font-family: "Chewy";
  src: url("../public/Chewy/Chewy-Regular.ttf");
}
@font-face {
  font-family: "Modak";
  src: url('../public/Modak/Modak-Regular.ttf');
}
@font-face {
  font-family: "Bagel-Fat-One";
  src: url('../public/Bagel_Fat_One/BagelFatOne-Regular.ttf');
}
`;

export default GlobalStyle;

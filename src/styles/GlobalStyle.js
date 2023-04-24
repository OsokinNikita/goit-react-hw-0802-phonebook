import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 body {
  background-image: url(../public/wallpaperflare.com_wallpaper.jpg);
  background-repeat: no-repeat;
  background-position: right 0 top 0;
  background-size: auto 100%;
  height: 100%;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Death Note Font', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   background-color: black;
  /* background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
  /* padding-top: 10px;
  padding-bottom: 10px;
  color: ${p => p.theme.colors.colorText}; */
}

code {
   font-family: 'Death Note Font', sans-serif;
}
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
`;

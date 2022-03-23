import styled, { createGlobalStyle } from "styled-components";
import { mainColors } from "../Constants/Colors";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export const MainContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: ${mainColors.background};
color: white;

`
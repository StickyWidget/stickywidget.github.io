import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider } from "react95";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default props =>
  <div className="App">
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
      <List>
        <ListItem>🎤 Sing</ListItem>
        <ListItem>💃🏻 Dance</ListItem>
        <Divider />
        <ListItem disabled>😴 Sleep</ListItem>
      </List>
    </ThemeProvider>
  </div>

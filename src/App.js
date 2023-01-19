import "./App.css";
import NavStyle from "./components/NavBar/Nav";
import Grid from "./components/Grid/Grid";
import Images from "./components/FirstImage/Images";
import Post from "./components/Post/Post";
import React from "react";
import Feature from "./components/Features/Feature";

function App() {
  return (
    <div>
      <NavStyle />

      <Grid />
      <Images />
      <Post />
      <Feature />
      <div style={{ height: 600 }}></div>
    </div>
  );
}

export default App;

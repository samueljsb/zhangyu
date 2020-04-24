import React, { ReactElement } from "react";
import "./App.css";
import { Container, Image } from "react-bootstrap";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

import ZhangyuContainer from "./ZhangyuContainer";
import { steppingMovements } from "../constants/movements";

const App = (): ReactElement => {
  return (
    <Container className="App">
      <header className="App-header">
        <Image
          src={`${process.env.PUBLIC_URL}/logo.png`}
          className="App-logo"
          alt="logo"
        />
        <h1>Zhangyu for Taijiquan</h1>
      </header>

      <ZhangyuContainer allMovements={steppingMovements} />

      <Container>
        <p>
          {"Zhāngyú (章魚) is Mandarin for octopus: a creature with 8 legs, " +
            "which means it has every excuse to be uncoordinated. " +
            "You (probably) do not have 8 legs. " +
            "Don't be an octopus."}
        </p>
      </Container>

      <footer className="App-footer">
        Copyright 2019–2020 Samuel Searles-Bryant
      </footer>
    </Container>
  );
};

export default App;

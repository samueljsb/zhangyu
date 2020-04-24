import React from "react";
import { Jumbotron } from "react-bootstrap";

import { Movement } from "../constants/movements";

interface MovementDisplayProps {
  movement: Movement | null;
}

const MovementDisplay: React.FC<MovementDisplayProps> = ({ movement }) => {
  return (
    <Jumbotron
      style={{ color: "#282c34", textAlign: "center", minHeight: 174 }}
    >
      <h2 data-testid={"movement-name"}>{movement?.name}</h2>
    </Jumbotron>
  );
};

export default MovementDisplay;

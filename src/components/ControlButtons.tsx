import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Movement, enGarde } from "../constants/movements";

interface ControlButtonsProps {
  isRunning: boolean;
  setIsRunning: (arg: boolean) => void;
  setCurrentMovement: (arg: Movement | null) => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
  isRunning,
  setIsRunning,
  setCurrentMovement
}) => {
  return (
    <Form.Group style={{ textAlign: "center" }}>
      <Form.Row>
        <Col>
          <Button
            block
            variant="success"
            size="lg"
            disabled={isRunning}
            onClick={(): void => {
              setCurrentMovement(enGarde);
              setIsRunning(true);
            }}
          >
            Start
          </Button>
        </Col>
        <Col>
          <Button
            block
            variant="danger"
            size="lg"
            disabled={!isRunning}
            onClick={(): void => {
              setCurrentMovement(null);
              setIsRunning(false);
            }}
          >
            Stop
          </Button>
        </Col>
      </Form.Row>
    </Form.Group>
  );
};

export default ControlButtons;

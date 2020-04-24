import React, { ReactElement } from "react";
import Form from "react-bootstrap/Form";
import RangeSlider from "react-bootstrap-range-slider";

interface SpeedSelectProps {
  speed: number;
  setSpeed: (arg: number) => void;
}

const SpeedSelect: React.FC<SpeedSelectProps> = ({
  speed,
  setSpeed
}): ReactElement => {
  return (
    <Form.Group>
      <Form.Label>Select the speed:</Form.Label>
      <RangeSlider
        value={speed}
        min={1}
        max={11}
        tooltip="off"
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          setSpeed(Number(event.target.value));
        }}
      />
    </Form.Group>
  );
};

export default SpeedSelect;

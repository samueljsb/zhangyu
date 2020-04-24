import React, { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import _ from "lodash";
import { Container, Form } from "react-bootstrap";

import ControlButtons from "../components/ControlButtons";
import MovementDisplay from "../components/MovementDisplay";
import MovementsSelect from "../components/MovementsSelect";
import SpeedSelect from "../components/SpeedSelect";
import { Movement } from "../constants/movements";

interface ZhangyuContainerProps {
  allMovements: Movement[];
}

const ZhangyuContainer: React.FC<ZhangyuContainerProps> = ({
  allMovements
}) => {
  const [movements, updateMovements] = useImmer<{ [name: string]: Movement }>(
    _.keyBy(allMovements, "name")
  );
  const [currentMovement, setCurrentMovement] = useState<Movement | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(6); // start at 1 per 1.48 seconds.

  /** When running, set an interval to select a new movement every time period. */
  useEffect(() => {
    const selectNextMovement = (): Movement | null => {
      const nextMovement = _.sample(
        _.values(movements).filter(movement => movement.enabled)
      );
      return nextMovement || null;
    };

    const calculateIntervalPeriod = (): number => {
      return 480 + 200 * (11 - speed); // 480 ms <-> 2.48 s
    };

    let interval: NodeJS.Timeout | undefined = undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentMovement(null); // force audio to play for repeated movements
        setCurrentMovement(selectNextMovement());
      }, calculateIntervalPeriod());
    }
    return (): void => {
      interval && clearInterval(interval);
    };
  }, [isRunning, movements, speed]);

  /** Play the audio file for each movement as it is selected. */
  useEffect(() => {
    currentMovement?.audio.play();
  }, [currentMovement]);

  return (
    <Container>
      <Form>
        <MovementsSelect
          movements={_.values(movements)}
          updateMovements={updateMovements}
        />
        <SpeedSelect speed={speed} setSpeed={setSpeed} />
        <ControlButtons
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          setCurrentMovement={setCurrentMovement}
        />
      </Form>
      <MovementDisplay movement={currentMovement} />
    </Container>
  );
};

export default ZhangyuContainer;

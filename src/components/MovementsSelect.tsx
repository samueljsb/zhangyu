import React, { ReactElement } from "react";
import Form from "react-bootstrap/Form";
import _ from "lodash";

import { Movement } from "../constants/movements";
import { Col } from "react-bootstrap";

interface MovementFormProps {
  movements: Movement[];
  updateMovements: (f: (draft: { [name: string]: Movement }) => void) => void;
}

const MovementsSelect: React.FC<MovementFormProps> = ({
  movements,
  updateMovements
}): ReactElement => {
  return (
    <Form.Group>
      <Form.Label>Select movements:</Form.Label>
      {_.chunk(movements, movements.length / 2).map(
        (movements_group, index) => {
          return (
            <Form.Row key={`movements-form-row-${index}`}>
              {movements_group.map((movement: Movement) => {
                return (
                  <Col key={movement.name}>
                    <Form.Check
                      type={"switch"}
                      inline
                      checked={movement.enabled}
                      id={`switch-${movement.name}`}
                      key={movement.name}
                      label={movement.name}
                      onChange={(): void => {
                        updateMovements(draft => {
                          draft[movement.name].enabled = !movement.enabled;
                        });
                      }}
                    />
                  </Col>
                );
              })}
            </Form.Row>
          );
        }
      )}
    </Form.Group>
  );
};

export default MovementsSelect;

import React from "react";
import { render } from "@testing-library/react";

import MovementDisplay from "./MovementDisplay";
import { Movement } from "../constants/movements";

describe("MovementDisplay", () => {
  it("Shows no text when no movement passed in", () => {
    const { getByTestId } = render(<MovementDisplay movement={null} />);

    const text = getByTestId("movement-name");
    expect(text.innerHTML).toEqual("");
  });

  it("Shows the movment name", () => {
    const movement = { name: "Foobar" } as Movement;
    const { getByTestId } = render(<MovementDisplay movement={movement} />);

    const text = getByTestId("movement-name");
    expect(text.innerHTML).toEqual("Foobar");
  });
});

/* eslint-disable testing-library/no-node-access */
import React from "react";
import selectEvent from "react-select-event";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("Submit form successfully", async () => {
  render(<App />);

  // open modal
  const buttonOpenModal = screen.getByText(/Add more addresses/i);
  await fireEvent.click(buttonOpenModal);

  // select all inputs
  const line1 = screen.getByLabelText(/line 1/i);
  const line2 = screen.getByLabelText(/line 2/i);
  const line3 = screen.getByLabelText(/line 3/i);
  const town = screen.getByLabelText(/Town/i);
  const postcode = screen.getByLabelText(/Post code/i);
  const country = screen.getByLabelText(/country/i);

  // Change the values
  await fireEvent.change(line1, { target: { value: "Example line1" } });
  await fireEvent.change(line2, { target: { value: "Example line2" } });
  await fireEvent.change(line3, { target: { value: "Example line3" } });
  await fireEvent.change(town, { target: { value: "Example town" } });
  await fireEvent.change(postcode, { target: { value: "Example postCode" } });

  await selectEvent.openMenu(country);
  await selectEvent.select(country, "England");

  // submit form
  const button = screen.getByText("Save");
  fireEvent.click(button);

  await waitFor(() => {
    const label = screen.getByLabelText(/Example line1/i);

    expect(label).toBeInTheDocument();
  });
  /*   await waitFor(() => {
    const required = screen.getAllByText(/Required/i)[0];
    expect(required).toBeInTheDocument();
  }); */

  /*   const buttonOpenModal = screen.getByText(/Add more addresses/i);

  await fireEvent.click(buttonOpenModal);

  const input = screen.getByLabelText("Line 1");
  await fireEvent.change(input, { target: { value: "Hola1" } });

  expect(input).toBeInTheDocument(); */
  // const line1 = document.querySelector(`input[name="line1"]`);
  // const button = screen.getByText("Aceptar");
});

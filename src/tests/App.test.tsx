/* eslint-disable testing-library/no-node-access */
import React from "react";
import selectEvent from "react-select-event";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

test("Create an address, select it and submit home form", async () => {
  render(<App />);

  const address1 = { line1:"example_l1", line2:"example_l2", line3:"example_l3", postcode:"example_p", town:"example_town",country:"England" } // prettier-ignore
  await fillFormAndSubmit(address1);

  let label;
  await waitFor(() => {
    // select the address 1 before created
    const labelText = new RegExp(address1.line1, "i");
    label = screen.getByLabelText(labelText);
  });

  // click on the address created and make sure it's checked
  fireEvent.click(label);
  expect(label).toBeChecked();

  // submit address form and checked the alert has been called
  const buttonSubmitAddress = screen.getByText("Submit address");
  fireEvent.click(buttonSubmitAddress);
  await waitFor(() => {
    const alert = jest.spyOn(window, "alert").mockImplementation();
    expect(alert).toHaveBeenCalledTimes(1);
  });
});

const fillFormAndSubmit = async (address) => {
  const {line1, line2, line3, country, postcode, town} = address; // prettier-ignore

  // open modal
  const buttonOpenModal = screen.getByText(/Add more addresses/i);
  await fireEvent.click(buttonOpenModal);
  // select all inputs
  const line1Input = screen.getByLabelText(/line 1/i);
  const line2Input = screen.getByLabelText(/line 2/i);
  const line3Input = screen.getByLabelText(/line 3/i);
  const townInput = screen.getByLabelText(/Town/i);
  const postcodeInput = screen.getByLabelText(/Post code/i);
  const countryInput = screen.getByLabelText(/country/i);

  // edit values of the inputs
  await fireEvent.change(line1Input, { target: { value: line1 } });
  await fireEvent.change(line2Input, { target: { value: line2 } });
  await fireEvent.change(line3Input, { target: { value: line3 } });
  await fireEvent.change(townInput, { target: { value: town } });
  await fireEvent.change(postcodeInput, {
    target: { value: postcode }
  });

  await selectEvent.openMenu(countryInput);
  await selectEvent.select(countryInput, country);
  // submit form to create an address
  const buttonCreateAddress = screen.getByText("Save");
  fireEvent.click(buttonCreateAddress);
};

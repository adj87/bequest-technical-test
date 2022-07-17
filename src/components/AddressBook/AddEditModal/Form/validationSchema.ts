import { Address } from "../../index";

export const validationSchema: any = (values: Address) => {
  const errors: any = {};
  const requiredMessage = "Required";
  if (values.line1 === "") errors.line1 = requiredMessage;
  if (values.country === "") errors.country = requiredMessage;
  if (values.postcode === "") errors.postcode = requiredMessage;
  if (values.town === "") errors.town = requiredMessage;

  return errors;
};

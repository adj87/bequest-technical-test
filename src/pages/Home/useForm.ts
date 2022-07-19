import { Address } from "components";
import { useFormik } from "formik";

export const useForm = (
  initialValues: { address: string | null },
  addresses: Address[]
) => {
  const { values, errors, setFieldValue, submitForm } = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (values.address) {
        const address = addresses.find((a) => a.id == values.address);
        const addressStringified = JSON.stringify(address, null, 2);
        alert(addressStringified);
      }
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.address) errors.address = "Select an address first";
      return errors;
    }
  });
  return { values, errors, setFieldValue, submitForm };
};

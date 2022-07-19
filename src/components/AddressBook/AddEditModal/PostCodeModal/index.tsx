import { useState } from "react";
import Select from "react-select";
import { useFormik } from "formik";
import { Address } from "components/AddressBook";
import { InputErrorMessage, InputLabel, InputText, Modal } from "components";

import { newAddress } from "../Form/newAddress";
import { useAddresses } from "./useAddresses";

interface PostCodeModalProps {
  onSubmit: (a: Address) => void;
  onCancel: () => void;
  postCode: string;
}

export const PostCodeModal: React.FC<PostCodeModalProps> = (props) => {
  const { onCancel, postCode: initialPostCode, onSubmit } = props;
  const [postCode, setPostCode] = useState(initialPostCode);
  const { loading, addresses, error } = useAddresses(postCode);
  const { values, errors, submitCount, setValues, submitForm } =
    useFormik<Address>({
      initialValues: newAddress,
      validate: (values) => {
        const errors: any = {};
        if (!values.country) errors.country = "You must select a address"; // i set errors country but it might be any of the Address entity
        return errors;
      },
      validateOnChange: true,
      onSubmit
    });
  const isFormEverSubmitted = submitCount > 0;
  return (
    <Modal
      open={true}
      title="Search by postcode"
      onCancel={onCancel}
      onOk={submitForm}
      size="md"
    >
      <InputText
        label="PostCode"
        value={postCode}
        onChange={(a, b) => setPostCode(b as string)}
        error={error}
        placeholder="Example 'nn13er'"
      />
      <div>
        <InputLabel text="Select address" />
        <Select<Address>
          value={values.line1 ? values : null} // if values line1 exists, it means that an address has been selected when onChange
          classNamePrefix="react-select"
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          menuPortalTarget={document.body}
          menuPosition={"fixed"}
          isLoading={loading}
          getOptionValue={(a) => `${a.line1}-${a.town}-${a.country}`}
          getOptionLabel={(a) => `${a.line1}, ${a.town}`}
          options={addresses}
          // @ts-expect-error
          onChange={(a) => setValues(a)}
        />
        <InputErrorMessage text={isFormEverSubmitted && errors.country} />
      </div>
    </Modal>
  );
};
// nn13er

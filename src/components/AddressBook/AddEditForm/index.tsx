import { Modal, InputText, InputLabel } from "components";
import { useFormik } from "formik";
import Select from "react-select";
import { validationSchema as validate } from "./validationSchema";

import { Address } from "..";

interface ModalFormProps {
  address: Address;
  onSubmit: (a: Address) => void;
  onCancel: () => void;
}

const countries = [{ value: "england" }, { value: "spain" }];

const AddEditModalForm: React.FC<ModalFormProps> = (props) => {
  const { address, onSubmit, onCancel } = props;
  const {
    values,
    setFieldValue,
    errors,
    handleSubmit,
    submitForm,
    submitCount
  } = useFormik<Address>({
    initialValues: address,
    onSubmit,
    validate,
    validateOnChange: true
  });
  const { line1, line2, line3, country, id, postcode, town } = values;
  const isFormEverSubmitted = submitCount > 0;
  return (
    <Modal
      onOk={(): Promise<any> => submitForm()}
      onCancel={(): void => onCancel()}
      title={id ? "Edit address" : "Add address"}
      open={true}
    >
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-2">
          <InputText
            label="Line 1"
            onChange={setFieldValue}
            name="line1"
            value={line1}
            error={isFormEverSubmitted && errors.line1}
            required
          />
          <InputText
            label="Line 2"
            onChange={setFieldValue}
            name="line2"
            value={line2}
            error={isFormEverSubmitted && errors.line2}
          />
          <InputText
            label="Line 3"
            onChange={setFieldValue}
            name="line3"
            value={line3}
            error={isFormEverSubmitted && errors.line3}
          />
          <InputText
            label="Town"
            onChange={setFieldValue}
            name="town"
            value={town}
            error={isFormEverSubmitted && errors.town}
            required
          />
          <InputText
            label="Post code"
            onChange={setFieldValue}
            name="postcode"
            value={postcode}
            error={isFormEverSubmitted && errors.postcode}
            required
          />
          <div>
            <InputLabel text="Country" required />
            <Select<{ value: string }>
              classNamePrefix="react-select"
              name="country"
              placeholder=""
              value={countries.find((el) => el.value === country)}
              getOptionLabel={({ value }): string => value}
              options={countries}
              onChange={({ value }: any, { name }): void =>
                setFieldValue(name as string, value) as unknown as void
              }
            />
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {isFormEverSubmitted && errors.country}
            </p>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddEditModalForm;

import { Modal, InputText, InputLabel } from "components";
import { useFormik } from "formik";
import Select from "react-select";

import { Address } from "..";

interface ModalFormProps {
  address: Address;
  onOk: (a: Address) => void;
  onCancel: () => void;
}

const CreateEditModalForm: React.FC<ModalFormProps> = (props) => {
  const { address, onOk, onCancel } = props;
  const { values, setValues, setFieldValue } = useFormik<Address>({
    initialValues: address,
    onSubmit: (a: Address) => {
      onOk(a);
    }
  });
  const countries = [{ value: "england" }, { value: "spain" }];
  return (
    <Modal
      onOk={(): void => onOk(address)}
      onCancel={(): void => onCancel()}
      title="Add address"
      open={true}
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-2">
        <InputText
          label="Line 1"
          onChange={setFieldValue}
          name="line1"
          value={values.line1}
          required
        />
        <InputText
          label="Line 2"
          onChange={setFieldValue}
          name="line2"
          value={values.line2}
        />
        <InputText
          label="Line 3"
          onChange={setFieldValue}
          name="line3"
          value={values.line3}
        />
        <InputText
          label="Town"
          onChange={setFieldValue}
          name="town"
          required
          value={values.town}
        />
        <InputText
          label="Post code"
          onChange={setFieldValue}
          name="postcode"
          required
          value={values.postcode}
        />
        <div>
          <InputLabel text="Country" />
          <Select<{ value: string }>
            classNamePrefix="react-select"
            name="country"
            placeholder=""
            value={countries.find((el) => el.value === values.country)}
            getOptionLabel={({ value }): string => value}
            options={countries}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CreateEditModalForm;

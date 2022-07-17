import { useFormik } from "formik";
import { Modal } from "components";
import { validationSchema as validate } from "./Form/validationSchema";
import { Form } from "./Form";

import { Address } from "..";

interface ModalFormProps {
  address: Address;
  onSubmit: (a: Address) => void;
  onCancel: () => void;
}

const AddEditModalForm: React.FC<ModalFormProps> = (props) => {
  const { address, onSubmit, onCancel } = props;
  const { values, setFieldValue, errors, submitForm, submitCount } =
    useFormik<Address>({
      initialValues: address,
      onSubmit,
      validate,
      validateOnChange: true
    });

  return (
    <Modal
      onOk={(): Promise<any> => submitForm()}
      onCancel={(): void => onCancel()}
      title={values.id ? "Edit address" : "Add address"}
      open={true}
    >
      <span className="float-right span-green">Search by postcode</span>
      <Form
        values={values}
        errors={errors}
        setFieldValue={setFieldValue}
        submitCount={submitCount}
      />
    </Modal>
  );
};

export default AddEditModalForm;

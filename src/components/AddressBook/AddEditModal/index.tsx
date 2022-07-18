import { useState } from "react";
import { useFormik } from "formik";
import { Modal } from "components";
import { validationSchema as validate } from "./Form/validationSchema";
import { Form } from "./Form";
import { PostCodeModal } from "./PostCodeModal";

import { Address } from "..";

interface ModalFormProps {
  address: Address;
  onSubmit: (a: Address) => void;
  onCancel: () => void;
}

const AddEditModalForm: React.FC<ModalFormProps> = (props) => {
  const [openPCodeModal, setOpenPCodeModal] = useState<boolean>(false);
  const { address, onSubmit, onCancel } = props;
  const { values, setFieldValue, errors, submitForm, submitCount, setValues } =
    useFormik<Address>({
      initialValues: address,
      onSubmit,
      validate,
      validateOnChange: true
    });

  return (
    <>
      <Modal
        onOk={(): Promise<any> => submitForm()}
        onCancel={(): void => onCancel()}
        title={values.id ? "Edit address" : "Add address"}
        open={true}
      >
        <span
          className="float-right span-green"
          onClick={(): void => setOpenPCodeModal(true)}
        >
          Search by postcode
        </span>
        <Form
          values={values}
          errors={errors}
          setFieldValue={setFieldValue}
          submitCount={submitCount}
        />
      </Modal>
      {openPCodeModal && (
        <PostCodeModal
          onCancel={() => setOpenPCodeModal(false)}
          postCode={values.postcode}
          onSubmit={({ id, ...rest }) => {
            setOpenPCodeModal(false); // close the modal
            setValues(rest); // remove the id from the values we want to save because it may be an edition, therefore we are interested in keeping the original id
          }}
        />
      )}
    </>
  );
};

export default AddEditModalForm;

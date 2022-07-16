import { Modal } from "components/Modal";
import React from "react";
import { Address } from "..";

interface ModalFormProps {
  address: Address;
  onOk: (a: Address) => void;
  onCancel: () => void;
}

const CreateEditModalForm: React.FC<ModalFormProps> = (props) => {
  const { address, onOk, onCancel } = props;
  return (
    <Modal
      onOk={(): void => onOk(address)}
      onCancel={(): void => onCancel()}
      title="Hi thereee"
      open={true}
    >
      <div>This is the modal</div>
    </Modal>
  );
};

export default CreateEditModalForm;

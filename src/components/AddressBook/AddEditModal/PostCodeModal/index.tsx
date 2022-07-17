import { InputText } from "components/InputText";
import { Modal } from "components/Modal";
import { useState } from "react";
import Select from "react-select";

interface PostCodeModalProps {
  onCancel: () => void;
  postCode: string;
}

export const PostCodeModal: React.FC<PostCodeModalProps> = (props) => {
  const { onCancel, postCode: initialPostCode } = props;
  const [postCode, setPostCode] = useState(initialPostCode);
  return (
    <Modal
      open={true}
      title="Search by postcode"
      onCancel={onCancel}
      onOk={onCancel}
      size="md"
    >
      <InputText
        label="PostCode"
        value={postCode}
        onChange={(a, b): void => setPostCode(b as string)}
      />
      <Select value={initialPostCode} classNamePrefix="react-select" />
    </Modal>
  );
};

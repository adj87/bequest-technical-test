import { InputLabel } from "components/InputLabel";
import { InputText } from "components/InputText";
import { Modal } from "components/Modal";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useAddresses } from "./useAddresses";

interface PostCodeModalProps {
  onCancel: () => void;
  postCode: string;
}

export const PostCodeModal: React.FC<PostCodeModalProps> = (props) => {
  const { onCancel, postCode: initialPostCode } = props;
  const [postCode, setPostCode] = useState(initialPostCode);
  const { loading, addresses, error } = useAddresses(postCode);
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
        error={error}
      />
      <div>
        <InputLabel text="Select address" />
      </div>
      <Select
        value={initialPostCode}
        classNamePrefix="react-select"
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        menuPortalTarget={document.body}
        menuPosition={"fixed"}
        menuIsOpen={addresses.length > 0}
        isLoading={loading}
      />
    </Modal>
  );
};
// nn13er

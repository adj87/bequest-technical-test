import { Address } from "components/AddressBook";
import { InputLabel } from "components/InputLabel";
import { InputText } from "components/InputText";
import { Modal } from "components/Modal";
import { useState } from "react";
import Select from "react-select";
import { useAddresses } from "./useAddresses";

interface PostCodeModalProps {
  onCancel: () => void;
  postCode: string;
}

export const PostCodeModal: React.FC<PostCodeModalProps> = (props) => {
  const { onCancel, postCode: initialPostCode } = props;
  const [postCode, setPostCode] = useState(initialPostCode);
  const [address, setAddress] = useState<Address | null>(null);
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
      <Select<Address>
        value={address}
        classNamePrefix="react-select"
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        menuPortalTarget={document.body}
        menuPosition={"fixed"}
        isLoading={loading}
        getOptionValue={(a): string => `${a.line1}-${a.town}-${a.country}`}
        getOptionLabel={(a): string => `${a.line1}, ${a.town}`}
        options={addresses}
        onChange={(a): void => setAddress(a)}
      />
    </Modal>
  );
};
// nn13er

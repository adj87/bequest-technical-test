import { useState } from "react";
import { InputRadioGroup } from "../InputRadioGroup";
import AddEditModalForm from "./AddEditModal";
import { newAddress } from "./AddEditModal/Form/newAddress";
import OptionLabel from "./OptionLabel";

export interface Address {
  id: number | null;
  line1: string;
  line2: string;
  line3: string;
  postcode: string;
  town: string;
  country: string;
}

interface AddressBooksProps {
  options: Address[];
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  onAddOrEdit: (address: Address) => void;
  onDelete: (id: number) => void;
}

export const AddressBook: React.FC<AddressBooksProps> = (props) => {
  const { options, name, onChange, value, onAddOrEdit, onDelete } = props;
  const [addressToForm, setAddressToForm] = useState<Address | null>();

  return (
    <>
      <InputRadioGroup<Address>
        name={name}
        options={options}
        optionLabel={(address): React.ReactElement => (
          <OptionLabel
            address={address}
            onDelete={(id: number): void => onDelete(id)}
            onEdit={(a): void => setAddressToForm(a)}
          />
        )}
        valueKey={"id"}
        value={value}
        label={"Select address"}
        onChange={onChange}
      />
      <span
        className={`span-green inline-block mt-8`}
        onClick={(): void => setAddressToForm(newAddress)}
      >
        Add more addresses
      </span>
      {addressToForm && (
        <AddEditModalForm
          onSubmit={(a: Address): void => {
            onAddOrEdit(a);
            setAddressToForm(null); // close the modal
          }}
          address={addressToForm as Address}
          onCancel={(): void => setAddressToForm(null)}
        />
      )}
    </>
  );
};

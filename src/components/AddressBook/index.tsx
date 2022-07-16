import { useState } from "react";
import { InputRadioGroup } from "../InputRadioGroup";
import CreateEditModalForm from "./AddEditForm";
import { newAddress } from "./AddEditForm/newAddress";

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
  onAdd: (address: Address) => void;
  onEdit: (address: Address) => void;
  onDelete: (id: number) => void;
}

export const AddressBook: React.FC<AddressBooksProps> = (props) => {
  const { options, name, onChange, value, onAdd, onEdit, onDelete } = props;
  const [addressToForm, setAddressToForm] = useState<Address | null>();
  return (
    <>
      <InputRadioGroup<Address>
        name={name}
        options={options}
        optionLabel={(address): React.ReactElement => (
          <>
            <span className="ml-4 font-bold inline-block w-24">
              {address.country}
            </span>
            <span className="ml-4 text-md text-gray-600">{`${address.line1} `}</span>
            <span className="text-md text-gray-600 hidden md:inline">{`, ${address.line2} `}</span>
            <span className="text-md text-gray-600 hidden md:inline">{`, ${address.line3}`}</span>
            <span
              className="text-custom-green cursor-pointer ml-4 hover:underline"
              onClick={(): void => setAddressToForm(address)}
            >
              Edit
            </span>
            <span
              className="text-custom-green cursor-pointer ml-2 hover:underline"
              onClick={(): void => setAddressToForm(address)}
            >
              Remove
            </span>
          </>
        )}
        valueKey={"id"}
        value={value}
        label={"Select address"}
        onChange={onChange}
      />
      <span
        className="text-custom-green mt-8 inline-block cursor-pointer hover:underline"
        onClick={(): void => setAddressToForm(newAddress)}
      >
        Add more addresses
      </span>
      {addressToForm && (
        <CreateEditModalForm
          onOk={(a: Address): void => console.log(a)}
          address={addressToForm as Address}
          onCancel={(): void => setAddressToForm(null)}
        />
      )}
    </>
  );
};

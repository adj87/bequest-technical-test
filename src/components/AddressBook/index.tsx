import { useState } from "react";
import { InputRadioGroup } from "../InputRadioGroup";
import AddEditModalForm from "./AddEditForm";
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
  onAddOrEdit: (address: Address) => void;
  onDelete: (id: number) => void;
}

export const AddressBook: React.FC<AddressBooksProps> = (props) => {
  const { options, name, onChange, value, onAddOrEdit, onDelete } = props;
  const [addressToForm, setAddressToForm] = useState<Address | null>();
  const spanClassName = "text-custom-green cursor-pointer hover:underline";

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
              className={`${spanClassName} ml-4`}
              onClick={(): void => setAddressToForm(address)}
            >
              Edit
            </span>
            <span
              className={`${spanClassName} ml-2`}
              onClick={(): void => onDelete(address.id as number)}
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
        className={`${spanClassName} inline-block mt-8`}
        onClick={(): void => setAddressToForm(newAddress)}
      >
        Add more addresses
      </span>
      {addressToForm && (
        <AddEditModalForm
          onOk={(a: Address): void => {
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

import { InputRadioGroup } from "../InputRadioGroup";

export interface Address {
  id: number;
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

export const AddressBook: React.FC<AddressBooksProps> = ({
  options,
  name,
  onChange,
  value
}) => {
  return (
    <InputRadioGroup<Address>
      name={name}
      options={options}
      optionLabel={(address): React.ReactElement => (
        <span>{address.country}</span>
      )}
      valueKey={"id"}
      value={value}
      label={"Holaaa"}
      onChange={onChange}
    />
  );
};

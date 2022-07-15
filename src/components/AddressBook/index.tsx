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
    <>
      <InputRadioGroup<Address>
        name={name}
        options={options}
        optionLabel={(address): React.ReactElement => (
          <>
            <span className="ml-4 font-bold inline-block w-24">
              {address.country}
            </span>
            <span className="ml-4 text-md text-gray-600">{`${address.line1}, ${address.line2}, ${address.line3}`}</span>
            <span className="text-custom-green cursor-pointer ml-4 hover:">
              Edit
            </span>
            <span className="text-custom-green cursor-pointer ml-2">
              Remove
            </span>
          </>
        )}
        valueKey={"id"}
        value={value}
        label={"Select address"}
        onChange={onChange}
      />
      <span className="text-custom-green mt-8 inline-block cursor-pointer">
        {" "}
        Add more address
      </span>
    </>
  );
};

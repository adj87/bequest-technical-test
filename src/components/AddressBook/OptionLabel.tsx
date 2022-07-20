import { Address } from ".";

interface OptionLabelProps {
  address: Address;
  onEdit: (a: Address) => void;
  onDelete: (id: number) => void;
  htmlFor: string;
}

const OptionLabel: React.FC<OptionLabelProps> = (props) => {
  const { address, onDelete, onEdit, htmlFor } = props;
  const { line1, line2, line3, country } = address;
  const addComma = (string: string) => string && `${string}, `;
  return (
    <label htmlFor={htmlFor} className="flex items-center inline-block">
      {" "}
      <span className="ml-4 font-bold inline-block max-w-32 md:max-w-44 truncate">
        {line1}
      </span>
      <span className="ml-4 text-md text-gray-600 hidden xs:inline-block mr-2">
        {addComma(line2)}
      </span>
      <span className="text-md text-gray-600 hidden md:inline-block mr-2">
        {addComma(line3)}
      </span>
      <span className="text-md text-gray-600 hidden md:inline-block mr-2">
        {country}
      </span>
      <span className={"span-green ml-4"} onClick={() => onEdit(address)}>
        Edit
      </span>
      <span
        className={`span-green ml-2`}
        onClick={(): void => onDelete(address.id as number)}
      >
        Delete
      </span>
    </label>
  );
};

export default OptionLabel;

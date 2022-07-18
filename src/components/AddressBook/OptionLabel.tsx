import { Address } from ".";

interface OptionLabelProps {
  address: Address;
  onEdit: (a: Address) => void;
  onDelete: (id: number) => void;
}

const OptionLabel: React.FC<OptionLabelProps> = (props) => {
  const { address, onDelete, onEdit } = props;
  const { line1, line2, line3, country } = address;
  const addComma = (string: string) => string && `${string},`;
  return (
    <>
      {" "}
      <span className="ml-4 font-bold inline-block w-30">{line1}</span>
      <span className="ml-4 text-md text-gray-600 hidden xs:inline">
        {addComma(line2)}
      </span>
      <span className="text-md text-gray-600 hidden md:inline">
        {addComma(line3)}
      </span>
      <span className="text-md text-gray-600 hidden md:inline">{country}</span>
      <span className={"span-green ml-4"} onClick={() => onEdit(address)}>
        Edit
      </span>
      <span
        className={`span-green ml-2`}
        onClick={(): void => onDelete(address.id as number)}
      >
        Delete
      </span>
    </>
  );
};

export default OptionLabel;

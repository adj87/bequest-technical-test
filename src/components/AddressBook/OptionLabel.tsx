import { Address } from ".";

interface OptionLabelProps {
  address: Address;
  onEdit: (a: Address) => void;
  onDelete: (id: number) => void;
}

const OptionLabel: React.FC<OptionLabelProps> = (props) => {
  const { address, onDelete, onEdit } = props;
  return (
    <>
      {" "}
      <span className="ml-4 font-bold inline-block w-24">{address.line1}</span>
      <span className="ml-4 text-md text-gray-600 hidden xs:inline">{`${address.line2} `}</span>
      <span className="text-md text-gray-600 hidden md:inline">{`, ${address.line3} `}</span>
      <span className="text-md text-gray-600 hidden md:inline">{`, ${address.country}`}</span>
      <span className={"span-green ml-4"} onClick={(): void => onEdit(address)}>
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

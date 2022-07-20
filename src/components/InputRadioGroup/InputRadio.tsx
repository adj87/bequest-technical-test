import React from "react";

interface InputRadioProps {
  value: string;
  checked: boolean;
  onChange: (name: string, val: string) => void;
  optionLabel: React.ReactNode;
  name: string;
  id: string;
}

export const InputRadio: React.FC<InputRadioProps> = ({
  value,
  checked,
  name,
  onChange,
  optionLabel,
  id
}) => {
  return (
    <div className="ml-6 mt-4 flex items-center">
      <input
        checked={checked}
        id={id}
        type="radio"
        name={name}
        value={value}
        onChange={({ target }): void => onChange(target.name, target.value)}
        className="w-4 h-4 text-custom-green bg-gray-100 border-gray-300 focus:ring-custom-green dark:focus:ring-custom-green dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      {optionLabel}
    </div>
  );
};

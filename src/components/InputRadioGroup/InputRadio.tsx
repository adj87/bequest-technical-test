import React from "react";

interface InputRadioProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (name: string, val: string) => void;
  customLabel: React.ReactNode;
  name: string;
}

export const InputRadio: React.FC<InputRadioProps> = ({
  value,
  checked,
  name,
  label,
  onChange,
  customLabel
}) => {
  return (
    <div className="ml-6" key={`option-${value}`}>
      <input
        checked={checked}
        id="default-radio-2"
        type="radio"
        name={name}
        value={value}
        onChange={({ target }): void => onChange(target.name, target.value)}
        className="w-4 h-4 text-custom-green bg-gray-100 border-gray-300 focus:ring-custom-green dark:focus:ring-custom-green dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />

      {customLabel ?? (
        <label
          htmlFor="default-radio-2"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      )}
    </div>
  );
};

import React from "react";

interface InputRadioProps {
  checked: boolean;
  name: string;
  onChange: (name: string, checked: boolean) => void;
  label?: string;
  children?: React.ReactNode;
}

export const InputRadio: React.FC<InputRadioProps> = (props) => {
  const { checked, name, onChange, children, label } = props;
  return (
    <>
      <div className="flex items-center">
        <input
          checked={checked}
          id="default-radio-2"
          type="radio"
          name={name}
          onChange={({ target }): void => onChange(target.name, target.checked)}
          className="w-4 h-4 text-custom-green bg-gray-100 border-gray-300 focus:ring-custom-green dark:focus:ring-custom-green dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        {children ?? (
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {label}
          </label>
        )}
      </div>
    </>
  );
};

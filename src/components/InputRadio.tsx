import React from "react";

interface InputRadioProps {
  onChange: (name: string, val: string) => void;
  children?: React.ReactNode;
  options: { label: string; value: string }[];
  value: string;
  name: string;
  label: string;
  required?: boolean;
}

export const InputRadio: React.FC<InputRadioProps> = (props) => {
  const {
    onChange,
    children,
    value: inputValue,
    options,
    name,
    required,
    label
  } = props;
  return (
    <>
      <div className="flex items-center">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
        {options.map(({ label, value }) => {
          return (
            <>
              <input
                checked={inputValue === value}
                id="default-radio-2"
                type="radio"
                name={name}
                value={value}
                onChange={({ target }): void =>
                  onChange(target.name, target.value)
                }
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
            </>
          );
        })}
      </div>
    </>
  );
};

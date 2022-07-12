import React from "react";

interface InputTextProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (name: string, value: string | number) => void;
  label: string;
}

export const InputText: React.FC<InputTextProps> = (props) => {
  const { label, onChange, ...inputProps } = props;
  return (
    <>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
        <input
          onChange={({ target }): void => onChange(target.name, target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-green focus:border-custom-green block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-green dark:focus:border-custom-green"
          {...inputProps}
        />
      </div>
    </>
  );
};

import React from "react";

interface InputTextProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (name: string, value: string | number) => void;
  label: string;
  error?: string;
}

export const InputText: React.FC<InputTextProps> = (props) => {
  const { label, onChange, error, required, ...inputProps } = props;
  const className = error
    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-green focus:border-custom-green block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-green dark:focus:border-custom-green";
  return (
    <>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
        <input
          onChange={({ target }): void => onChange(target.name, target.value)}
          className={className}
          {...inputProps}
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
        )}
      </div>
    </>
  );
};

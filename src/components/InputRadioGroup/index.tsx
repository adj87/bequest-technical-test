import React from "react";
import { InputRadio } from "./InputRadio";

interface InputRadioGroupProps {
  onChange: (name: string, val: string) => void;
  customLabel?: React.ReactNode;
  options: { label: string; value: string }[];
  value: string;
  name: string;
  label: string;
  required?: boolean;
}

export const InputRadioGroup: React.FC<InputRadioGroupProps> = (props) => {
  const {
    onChange,
    customLabel,
    value: groupValue,
    options,
    name,
    required,
    label
  } = props;
  return (
    <>
      <div className="flex flex-col">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
        {options.map(({ label, value }) => {
          return (
            <InputRadio
              checked={value === groupValue}
              onChange={onChange}
              name={name}
              value={value}
              label={label}
              customLabel={customLabel}
            />
          );
        })}
      </div>
    </>
  );
};

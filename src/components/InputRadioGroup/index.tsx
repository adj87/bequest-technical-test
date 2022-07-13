import React from "react";
import { InputRadio } from "./InputRadio";

interface InputRadioGroupProps<T> {
  onChange: (name: string, val: string) => void;
  customLabel: React.ReactNode;
  valueKey: keyof T;
  options: T[];
  value: string;
  name: string;
  required?: boolean;
  label: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const InputRadioGroup = <T,>(props: InputRadioGroupProps<T>) => {
  const {
    onChange,
    customLabel,
    value: groupValue,
    options,
    name,
    required,
    label,
    valueKey
  } = props;
  return (
    <>
      <div className="flex flex-col">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
        {options.map((opt: T) => {
          const value = opt[valueKey] as unknown as string;
          return (
            <InputRadio
              checked={value === groupValue}
              onChange={onChange}
              name={name}
              value={value}
              customLabel={customLabel}
            />
          );
        })}
      </div>
    </>
  );
};

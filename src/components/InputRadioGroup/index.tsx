import React from "react";
import InputLabel from "../InputLabel";
import { InputRadio } from "./InputRadio";

interface InputRadioGroupProps<T> {
  onChange: (name: string, val: string) => void;
  optionLabel: React.FC<T>;
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
    optionLabel: OptionLabel,
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
        <InputLabel required={required} text={label} />
        {options.map((opt: T) => {
          const value = opt[valueKey] as unknown as string;
          return (
            <InputRadio
              key={`option-${value}`}
              checked={value === groupValue}
              onChange={onChange}
              name={name}
              value={value}
              optionLabel={<OptionLabel {...opt} />}
            />
          );
        })}
      </div>
    </>
  );
};

import React from "react";
import { InputLabel } from "../InputLabel";
import { InputRadio } from "./InputRadio";

interface InputRadioGroupProps<T> {
  onChange: (name: string, val: string) => void;
  optionLabel: React.FC<T & { htmlFor: string }>;
  valueKey: keyof T;
  options: T[];
  value: string | null;
  name: string;
  required?: boolean;
  label: string;
  htmlForOption: (option: T) => string;
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
    valueKey,
    htmlForOption
  } = props;
  return (
    <>
      <div className="flex flex-col">
        <InputLabel required={required} text={label} />
        {options.map((opt: T) => {
          const value = opt[valueKey] as unknown as string;
          const htmlFor = htmlForOption(opt);
          return (
            <InputRadio
              key={`option-${value}`}
              // eslint-disable-next-line eqeqeq
              checked={value == groupValue}
              onChange={onChange}
              name={name}
              value={value}
              id={htmlFor}
              optionLabel={<OptionLabel {...opt} htmlFor={htmlFor} />}
            />
          );
        })}
      </div>
    </>
  );
};

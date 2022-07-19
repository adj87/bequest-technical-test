import React from "react";

interface InputLabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  required?: boolean;
  text: string;
}

export const InputLabel: React.FC<InputLabelProps> = ({
  text,
  required,
  htmlFor
}) => (
  <label
    className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
    htmlFor={htmlFor}
  >
    {text}
    {required && <span className="text-red-600"> *</span>}
  </label>
);

import React from "react";

interface InputLabelProps {
  required?: boolean;
  text: string;
}

const InputLabel: React.FC<InputLabelProps> = ({ text, required }) => (
  <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
    {text}
    {required && <span className="text-red-600"> *</span>}
  </label>
);

export default InputLabel;

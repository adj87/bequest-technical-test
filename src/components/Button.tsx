import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text, ...otherProps }) => {
  return (
    <button
      type="button"
      className="text-white bg-custom-red-600 hover:bg-custom-red-800 focus:outline-none focus:ring-4 focus:ring-custom-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-custom-red-600 dark:hover:bg-custom-red-700 dark:focus:ring-custom-red-900"
      {...otherProps}
    >
      {text}
    </button>
  );
};

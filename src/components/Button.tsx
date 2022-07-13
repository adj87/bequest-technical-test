import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  color?: "white" | "red";
}

export const Button: React.FC<ButtonProps> = ({
  text,
  color = "red",
  ...otherProps
}) => {
  const className = (color: string): string => {
    switch (color) {
      case "white":
        return "text-gray-400 bg-white border border-gray-300 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-custom-red-600 dark:hover:bg-custom-red-700 dark:focus:ring-custom-red-900";
      case "red":
      default:
        return "text-white bg-custom-red-600 hover:bg-custom-red-800 focus:outline-none focus:ring-4 focus:ring-custom-red-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-custom-red-600 dark:hover:bg-custom-red-700 dark:focus:ring-custom-red-900";
    }
  };
  return (
    <button type="button" className={className(color)} {...otherProps}>
      {text}
    </button>
  );
};

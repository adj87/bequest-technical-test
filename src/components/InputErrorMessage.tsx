import React from "react";

interface InputErrorMessageProps {
  text?: string | boolean | null;
}

export const InputErrorMessage: React.FC<InputErrorMessageProps> = (props) => {
  const { text } = props;
  return (
    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
      {text ?? text}
    </p>
  );
};

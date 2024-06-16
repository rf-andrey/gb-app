import React from "react";

interface Props {
  name: string;
  placeholder?: string;
  disabled?: boolean;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const FormTextArea = ({
  name,
  onChange,
  placeholder,
  disabled,
  value,
}: Props) => {
  return (
    <textarea
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      className="textarea textarea-bordered h-36"
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

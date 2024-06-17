import React from "react";

interface Options {
  value: number;
  label: string;
}

interface Props {
  name: string;
  placeholder?: string;
  options: Options[];
  disabled?: boolean;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FormSelect = ({
  name,
  onChange,
  placeholder,
  disabled,
  options,
  value,
}: Props) => {
  return (
    <select
      name={name}
      disabled={disabled}
      value={value}
      onChange={onChange}
      className="select select-bordered w-full"
    >
      <option disabled value="">
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

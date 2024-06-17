import React from "react";

interface Props {
  type?: string;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({
  type,
  name,
  onChange,
  label,
  placeholder,
  disabled,
  value,
}: Props) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        type={type ?? "text"}
        name={name}
        disabled={disabled}
        className="grow"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
    </label>
  );
};

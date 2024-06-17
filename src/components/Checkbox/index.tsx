import React from "react";

export const Checkbox = ({ checked }: { checked: boolean }) => (
  <input
    type="checkbox"
    disabled
    checked={checked}
    className={`checkbox !cursor-default ${
      checked && "checkbox-success !opacity-100"
    }`}
  />
);

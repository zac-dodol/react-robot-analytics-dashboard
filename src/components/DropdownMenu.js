import React from "react";

const DropdownMenu = ({ options, onChange }) => {
  return (
    <select className="me-auto" onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;

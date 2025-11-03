import React from "react";

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-dark mb-2 font-semibold">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded border placeholder:text-xs
        "
        placeholder={placeholder}
      >
         {/* <option value="" disabled>
    {placeholder || `Select ${label}`}
  </option> */}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;

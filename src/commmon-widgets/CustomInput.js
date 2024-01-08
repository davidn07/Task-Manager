import React from "react";

const CustomInput = (props) => {
  const { label, placeholder, type, value, onChange, name } = props;
  return (
    <div className="custom-input-container">
      <label for="customInput" class="custom-label">
        {label}
      </label>
      <i class="input-icon">&#128272;</i>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="custom-input"
      />
    </div>
  );
};

export default CustomInput;

import React from "react";
import "./formInput.style.scss";
const FormInput = ({ handleChange, label, ...otherItemProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherItemProps}
      />
      {label && (
        <label className={`${otherItemProps.value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};


export default FormInput;
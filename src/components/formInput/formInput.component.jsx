import React from "react";
// import "./formInput.style.scss";
import { FormInputContainer, FormInputLabel, GroupContainer } from "./formInput.styles";
const FormInput = ({ handleChange, label, ...otherItemProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer
        onChange={handleChange}
        {...otherItemProps}
      />
      {label && (
        <FormInputLabel
          className={`${
            otherItemProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;

import React, { useState } from 'react';
import cls from "./CustomCheckbox.module.scss";

interface CustomCheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

const CustomCheckbox = ({ label, checked = false, onChange }:CustomCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <label className={cls['custom-checkbox']}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={cls['custom-checkbox__input']}
      />
      <span className={cls['custom-checkbox__checkmark']}></span>
      {label && <span className={cls['custom-checkbox__label']}>{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
import {cls} from "./Checkbox.module.scss"

import { useState } from 'react';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
}

export const Checkbox = ({
  label = '',
  checked = false
}: CheckboxProps) => {

   const [isChecked, setIsChecked] = useState(false)
    

  return (
    <label className={cls.checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="hidden"
      />
      <div className={`w-5 h-5 border-2 rounded-md mr-2 flex items-center justify-center 
        ${checked ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
        {checked && (
          <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      {label && <span className="text-gray-700">{label}</span>}
    </label>
  );
};
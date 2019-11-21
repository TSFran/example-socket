import { useState } from 'react';

export const useInput = (val: string = '') => {
  const [ value, setValue ] = useState(val);
  
  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const resetValue = () => {
    setValue('')
  };

  return {
    value,
    onChange,
    resetValue
  }
};

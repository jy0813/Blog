import React, { useState } from 'react';
import Button from '@/components/atom/Button';
import Input from '@/components/atom/Input';

interface IProps {
  name: string;
  value: string;
  type: string;
  buttonText: string;
  placeholder: string;
  timer: number;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputTimer({
  name,
  value,
  type,
  buttonText,
  placeholder,
  timer,
  onClick,
  onChange,
}: IProps) {
  const minutes = Math.floor(timer / 60);
  const remainingSeconds = timer % 60;
  return (
    <div>
      <Input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span>{`${minutes}:${remainingSeconds}`}</span>
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  );
}

export default InputTimer;

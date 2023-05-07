import React, { useMemo, useState } from 'react';
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
  const [time, setTime] = useState<number>(180);
  const updateTimer = useMemo(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return { minutes, seconds };
  }, [time]);

  return (
    <div>
      <Input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span>{timer}</span>
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  );
}

export default InputTimer;

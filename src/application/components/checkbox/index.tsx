import { useState } from 'react';
import { StyledChecboxContainer } from './index.styles';

interface ICheckbox {
  isActive: boolean;
}
export const Checkbox = ({ isActive }: ICheckbox) => {
  const [isDone, setIsDone] = useState<boolean>(isActive);
  const onClick = () => {
    setIsDone((prev) => !prev);
  };
  return (
    <StyledChecboxContainer
      role={'checkbox'}
      data-value={isDone ? 'active' : 'inactive'}
      onClick={onClick}
      isActive={isDone}
    />
  );
};

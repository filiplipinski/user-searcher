import React, { useState, useEffect, ChangeEvent } from 'react';
import { GoSearch } from 'react-icons/go';
import { useDebounce } from 'utils/useDebounce';
import { User } from '../../models/user';
import * as S from './styled';

interface Props {
  data: User[];
  onChange?: (value: User[]) => void;
}

const SearchField: React.FC<Props> = ({ data, onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (onChange) onChange(filteredData);
  }, [filteredData, onChange]);

  useDebounce(
    () => {
      setFilteredData(
        data.filter((user: User) => user.name.toUpperCase().includes(inputValue.toUpperCase())),
      );
    },
    500,
    [inputValue],
  );

  return (
    <S.Wrapper>
      <S.Input
        type="text"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        placeholder="Search by user name..."
      />
      <GoSearch />
    </S.Wrapper>
  );
};

export default SearchField;

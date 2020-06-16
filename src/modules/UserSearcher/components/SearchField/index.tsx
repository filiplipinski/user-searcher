import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDebounce } from 'utils/useDebounce';
import { User } from '../../models/user';

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
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        placeholder="Search by user name..."
      />
    </div>
  );
};

export default SearchField;

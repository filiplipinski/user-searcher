import React, { useEffect, useState } from 'react';
import { useFetchUsers, User } from './models/user';
import SearchField from './components/SearchField';
import UsersList from './components/UsersList';
import Loader from './components/Loader';
import * as S from './styled';

const UserSearcher: React.FC = () => {
  const users = useFetchUsers();
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    if (users.data) setFilteredUsers(users.data);
  }, [users.data]);

  return (
    <>
      <S.Header>Users list</S.Header>
      <Loader asyncData={users}>
        {() => (
          <S.Box>
            <SearchField data={users.data || []} onChange={(val) => setFilteredUsers(val)} />
            <UsersList data={filteredUsers} />
          </S.Box>
        )}
      </Loader>
    </>
  );
};

export default UserSearcher;

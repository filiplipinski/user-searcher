import React from 'react';
import { User } from 'modules/UserSearcher/models/user';

interface Props {
  data: User[];
}

const UsersList: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((user) => (
        <p key={user.name}>{user.name}</p>
      ))}
    </>
  );
};

export default UsersList;

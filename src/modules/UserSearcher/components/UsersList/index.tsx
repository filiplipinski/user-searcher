import React from 'react';
import { User } from 'modules/UserSearcher/models/user';
import * as S from './styled';

interface Props {
  data: User[];
}

const UsersList: React.FC<Props> = ({ data }) => {
  return (
    <S.OlList>
      {data.length ? (
        data.map(({ id, name, username }) => (
          <li key={id}>
            <span>{name}</span>
            {`@${username}`}
          </li>
        ))
      ) : (
        <p>There is no such user with this name</p>
      )}
    </S.OlList>
  );
};

export default UsersList;

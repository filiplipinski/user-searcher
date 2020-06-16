import React from 'react';
import { HookData } from 'utils/createHook';
import LoadingCircle from './LoadingCircle';
import * as S from './styled';

interface Props {
  asyncData: HookData<any>;
  children: (props: any) => React.ReactNode;
}

const Loader: React.FC<Props> = ({ children, asyncData }) => {
  const { called, loading, data, error } = asyncData;

  const renderData =
    data && !error ? children({ data, error }) : <S.Error>Failed to fetch data</S.Error>;

  return <div>{called && loading ? <LoadingCircle /> : renderData}</div>;
};

export default Loader;

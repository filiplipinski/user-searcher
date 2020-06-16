import React from 'react';
import { HookData } from 'utils/createHook';

interface Props {
  asyncData: HookData<any>;
  children: (props: any) => React.ReactNode;
}

const Loader: React.FC<Props> = ({ children, asyncData }) => {
  const { called, loading, data, error } = asyncData;

  const renderData = data && !error ? children({ data, error }) : <p>Failed to fetch data</p>;

  return <div>{called && loading ? <div>Loading...</div> : renderData}</div>;
};

export default Loader;

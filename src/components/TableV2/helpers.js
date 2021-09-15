import React from 'react';
import UserCell from './CellUser';
import StatusCell from './CellStatus';

export const headerMaker = (data) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  data
    .filter(({ show }) => show)
    .map(({ type, ...rest }) => {
      if (type === 'user') {
        // eslint-disable-next-line react/react-in-jsx-scope
        return {
          ...rest,
          // eslint-disable-next-line react/jsx-props-no-spreading
          Cell: ({ cell: { value } }) => <UserCell {...value} />
        };
      }
      if (type === 'status') {
        // eslint-disable-next-line react/react-in-jsx-scope
        return {
          ...rest,
          // eslint-disable-next-line react/jsx-props-no-spreading
          Cell: ({ cell: { value } }) => <StatusCell {...value} />
        };
      }
      return rest;
    });

export const getData = ({
  params,
  setLoading,
  Service,
  asyncTask,
  setItems,
  setTotal
}) => {
  setLoading(true);
  const promise = Service.getAll(params);

  asyncTask(promise).then((res) => {
    setItems(res.data);
    setTotal(res.total);
    setLoading(false);
  });
};

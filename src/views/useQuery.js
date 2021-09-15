import { useMemo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export function useQuery({ headers, fetchData }) {
  const dispatch = useDispatch();
  // const [sort, setSort] = useState();
  const [search, setSearch] = useState('');
  const [pageSize, setPageSize] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  // const sortQuery = useMemo(() => {
  //   const found = sort && headers.find(({ id }) => id === sort.id);
  //   return found
  //     ? `&sort[${found.accessor}]=${sort.desc ? 'desc' : 'asc'}`
  //     : '&sort[id]=desc';
  // }, [sort, headers]);


  const pageSizeQuery = useMemo(
    () => (pageSize ? `&size=${pageSize}` : ''),
    [pageSize]
  );

  const pageQuery = useMemo(() => `page=${search ? 1 : pageIndex + 1}`, [
    pageIndex,
    search,
  ]);

  const query = useMemo(
    () =>
      `${pageQuery}${pageSizeQuery}`,
    [
      pageQuery,
      pageSizeQuery,
    ]
  );

  const handleOnTableChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  useEffect(() => {
    dispatch(
      fetchData({
        isSearch: true,
        query: `${query}${search ? '&search=' + search : ''}`,
      })
    );
    // eslint-disable-next-line
  }, [dispatch, search]);

  useEffect(() => {
    if (pageSize > 0) {
      dispatch(
        fetchData({
          isSearch: false,
          query: `${query}${search ? `&search=${search}` : ''}`,
        })
      );
    }
    // eslint-disable-next-line
  }, [query, dispatch]);

  return {
    query,
    search,
    // setSort,
    setSearch,
    handleOnTableChange,
  };
}

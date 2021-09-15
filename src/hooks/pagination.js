import { useRef, useCallback, useEffect, useState } from 'react';
import { useAsync } from './mounted';

export const useScrollPagination = (loading, setPageNumber, hasMore) => {
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setPageNumber]
  );
  return { lastElementRef };
};

export function useScrollableData(getPromise, query, search) {
  const asyncTask = useAsync();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  useEffect(() => {
    setLoading(true);
    setError(false);
    const promise = getPromise(query);
    asyncTask(promise)
      .then((res) => {
        if (search !== '') {
          setData([]);
          setSearchedData([])
          setSearchedData(res.data.users.data);
        }
        if (res.data.users.data && search === '') {
          setData((prev) => prev.concat(res.data.users.data));
        }
        setHasMore(res.data.users.data.length > 0);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [query, getPromise, asyncTask, search]);
  return {
    loading,
    data,
    hasMore,
    error,
    searchedData,
  };
}

export function useScrollableDriversData(getPromise, query, search) {
  const asyncTask = useAsync();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const promise = getPromise(query);
    asyncTask(promise)
      .then((res) => {
        if (search !== '') {
          setData([]);
          setSearchedData(res.data.drivers.data);
        }
        if (res.data.drivers.data && search === '') {
          setData((prev) => prev.concat(res.data.drivers.data));
        }
        setHasMore(res.data.drivers.data.length > 0);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [query, getPromise, asyncTask, search]);
  return {
    loading,
    data,
    hasMore,
    error,
    searchedData,
  };
}

export function useOldScrollableData(getPromise, page = 0, pageSize = 16) {
  const asyncTask = useAsync();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const startRow = page * pageSize;
    const endRow = startRow + pageSize;
    const promise = getPromise({ startRow, endRow });
    asyncTask(promise)
      .then((res) => {
        setData((prev) => prev.concat(res.data));
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [page, pageSize, getPromise, asyncTask]);
  return {
    loading,
    data,
    hasMore,
    error,
  };
}

export function useScrollableCustomerData(
  getPromise,
  query,
  search,
  spinnerLoading,
  setSpinnerLoading
) {
  const asyncTask = useAsync();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  useEffect(() => {
    setLoading(true);
    setError(false);
    const promise = getPromise(query);
    asyncTask(promise)
      .then((res) => {
        if (spinnerLoading) {
          setData([]);
        }
        if (search !== '') {
          setData([]);
          setSearchedData(res.data.customers.data);
        }
        if (res.data.customers.data && search === '') {
          setData((prev) => prev.concat(res.data.customers.data));
        }
        setHasMore(res.data.customers.data.length > 0);
        setLoading(false);
        setSpinnerLoading(false);
      })
      .catch(() => setError(true));
    //eslint-disable-next-line
  }, [getPromise, query, asyncTask]);
  return {
    loading,
    data,
    hasMore,
    error,
    searchedData,
  };
}

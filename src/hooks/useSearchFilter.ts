import {useCallback, useEffect, useState} from 'react';

const useSearchFilter = <T, K extends keyof T>(data: Array<T>, key: K) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [listData, setListData] = useState<Array<T>>(data);

  useEffect(() => {
    if (searchQuery) {
      const filteredListData = data.filter((item: T) => {
        const value = item[key];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
      });
      setListData(filteredListData);
    } else {
      setListData(data);
    }
  }, [searchQuery, data, key]);

  const filterListData = useCallback(
    (filter: string) => setSearchQuery(filter),
    [],
  );

  return {searchQuery, filterListData, listData};
};

export default useSearchFilter;

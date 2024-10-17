import {useState, useEffect, useCallback} from 'react';

export type SortOrder = 'asc' | 'desc' | undefined;

const useSortByPrice = <T extends {price: number}>(
  data: Array<T>,
  initialSortOrder: SortOrder,
) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(initialSortOrder);
  const [sortedData, setSortedData] = useState<Array<T>>([]);

  useEffect(() => {
    if (!sortOrder) {
      setSortedData(data);
    } else {
      const sorted = [...data].sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      });
      setSortedData(sorted);
    }
  }, [data, sortOrder]);

  const handleSorPress = useCallback(() => {
    if (sortOrder === undefined) {
      setSortOrder('asc');
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder(undefined);
    }
  }, [sortOrder]);

  return {sortedData, sortOrder, handleSorPress};
};

export default useSortByPrice;

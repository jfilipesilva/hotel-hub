import React from 'react';
import HotelsTemplate from '../templates/HotelsTemplate';
import useHotels from '../hooks/useHotels';
import {ActivityIndicator} from 'react-native-paper';
import {Hotel} from '../components/organisms/HotelCard/HotelCard';
import useSearchFilter from '../hooks/useSearchFilter';
import useSortByPrice from '../hooks/useSortByPrice';

const HotelsScreen = () => {
  const {data, error, isLoading} = useHotels();
  const {sortedData, handleSorPress, sortOrder} = useSortByPrice<Hotel>(
    data,
    undefined,
  );
  const {listData, searchQuery, filterListData} = useSearchFilter<
    Hotel,
    'name'
  >(sortedData, 'name');

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <HotelsTemplate
          handleSorPress={handleSorPress}
          sortOrder={sortOrder}
          searchQuery={searchQuery}
          data={error ? [] : listData}
          filterListData={filterListData}
        />
      )}
    </>
  );
};

export default HotelsScreen;

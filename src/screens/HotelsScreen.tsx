import React from 'react';
import HotelsTemplate from '../templates/HotelsTemplate';
import useHotels from '../hooks/useHotels';
import {ActivityIndicator} from 'react-native-paper';
import {Hotel} from '../components/organisms/HotelCard/HotelCard';
import useSearchFilter from '../hooks/useSearchFilter';

const HotelsScreen = () => {
  const {data, error, isLoading} = useHotels();
  const {listData, searchQuery, filterListData} = useSearchFilter<
    Hotel,
    'name'
  >(data, 'name');

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <HotelsTemplate
          searchQuery={searchQuery}
          data={error ? [] : listData}
          filterListData={filterListData}
        />
      )}
    </>
  );
};

export default HotelsScreen;

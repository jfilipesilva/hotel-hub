import React from 'react';
import HotelsTemplate from '../templates/HotelsTemplate';
import useHotels from '../hooks/useHotels';
import {ActivityIndicator} from 'react-native-paper';

const HotelsScreen = () => {
  const {data, error, isLoading} = useHotels();

  const listData = error ? [] : data;

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <HotelsTemplate data={listData} />
      )}
    </>
  );
};

export default HotelsScreen;

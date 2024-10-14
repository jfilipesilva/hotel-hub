import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import HotelCard, {Hotel} from '../components/organisms/HotelCard/HotelCard';

type HotelsTemplateProps = {
  data: Array<Hotel>;
};

const HotelsTemplate = ({data}: HotelsTemplateProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return <HotelCard hotel={item} />;
      }}
    />
  );
};

export default HotelsTemplate;

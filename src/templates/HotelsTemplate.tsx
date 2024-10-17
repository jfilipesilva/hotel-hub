import React, {useCallback} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import HotelCard, {Hotel} from '../components/organisms/HotelCard/HotelCard';
import {Searchbar, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

type HotelsTemplateProps = {
  data: Array<Hotel>;
  searchQuery: string;
  filterListData: (filter: string) => void;
};

const HotelsTemplate = ({
  data,
  filterListData,
  searchQuery,
}: HotelsTemplateProps) => {
  const renderEmptyComponent = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text>No hotels found</Text>
      </View>
    ),
    [],
  );

  return (
    <>
      <FlatList
        data={data}
        ListHeaderComponent={
          <Searchbar
            value={searchQuery}
            placeholder="Search"
            style={styles.searchbar}
            onChangeText={filterListData}
          />
        }
        ListEmptyComponent={renderEmptyComponent}
        renderItem={({item}) => {
          return <HotelCard hotel={item} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  emptyContainer: {
    flex: 1,
    gap: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HotelsTemplate;

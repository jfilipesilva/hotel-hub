import React, {useCallback} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import HotelCard, {Hotel} from '../components/organisms/HotelCard/HotelCard';
import {Chip, Searchbar, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {SortOrder} from '../hooks/useSortByPrice';

type HotelsTemplateProps = {
  data: Array<Hotel>;
  searchQuery: string;
  filterListData: (filter: string) => void;
  handleSorPress: () => void;
  sortOrder: SortOrder;
};

const HotelsTemplate = ({
  data,
  filterListData,
  handleSorPress,
  sortOrder,
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
          <>
            <Searchbar
              value={searchQuery}
              placeholder="Search"
              style={styles.searchbar}
              onChangeText={filterListData}
            />
            <View style={styles.sortContainer}>
              <Chip
                icon={
                  sortOrder === 'asc'
                    ? 'sort-ascending'
                    : sortOrder === 'desc'
                    ? 'sort-descending'
                    : ''
                }
                onPress={handleSorPress}>
                Price
              </Chip>
            </View>
          </>
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
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default HotelsTemplate;

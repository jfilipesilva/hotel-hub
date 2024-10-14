import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import React, {useMemo} from 'react';
import {useSharedValue} from 'react-native-reanimated';

type ImageSliderProps = {data: Array<string>};

const ImageSlider = ({data}: ImageSliderProps) => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  const width = useMemo(() => Dimensions.get('window').width, []);

  return (
    <View style={styles.mainContainer}>
      <Carousel
        ref={ref}
        width={width - width * 0.2}
        height={width / 2}
        loop={false}
        data={data}
        onProgressChange={progress}
        renderItem={({item}) => {
          return <Image style={styles.carouselImage} source={{uri: item}} />;
        }}
      />

      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={styles.paginationDots}
        containerStyle={styles.paginationContainer}
        onPress={onPressPagination}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  paginationDots: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
  },
  paginationContainer: {gap: 5, marginTop: 10},
});

export default ImageSlider;

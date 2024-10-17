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
        width={width - width * 0.1}
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
  mainContainer: {
    flex: 1,
    position: 'relative',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  paginationDots: {
    backgroundColor: 'white',
    borderRadius: 50,
  },
  paginationContainer: {
    gap: 5,
    bottom: 10,
    marginTop: 10,
    position: 'absolute',
    alignSelf: 'center',
  },
});

export default ImageSlider;

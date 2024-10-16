import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-paper';

type StarRatingProps = {
  numberOfStars: number;
};
const StarRating = ({numberOfStars}: StarRatingProps) => {
  return (
    <View style={styles.mainContainer}>
      {Array.from({length: numberOfStars}, (_, i) => (
        <Icon key={i} source="star" size={20} color="orange" />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
});

export default StarRating;

import React from 'react';
import {Linking, Platform, Pressable} from 'react-native';
import {Text} from 'react-native-paper';

type AddressLinkProps = {
  city: string;
  label?: string;
  address: string;
  latitude: number;
  longitude: number;
};

const AddressLink = ({
  city,
  label,
  address,
  latitude,
  longitude,
}: AddressLinkProps) => {
  const scheme = Platform.select({
    ios: 'maps://0,0?q=',
    android: 'geo:0,0?q=',
  });

  const latLng = `${latitude},${longitude}`;

  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  return (
    <Pressable onPress={() => Linking.openURL(url ?? '')}>
      <Text>{`${address}, ${city}`}</Text>
    </Pressable>
  );
};
export default AddressLink;

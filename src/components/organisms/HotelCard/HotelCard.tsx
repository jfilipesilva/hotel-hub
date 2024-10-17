import React from 'react';
import {Card, Chip, Divider, Text} from 'react-native-paper';
import ImageSlider from '../../molecules/ImageSlider/ImageSlider';
import {StyleSheet, View} from 'react-native';
import AddressLink from '../../atoms/AddressLink/AddressLink';
import StarRating from '../../atoms/StarRating/StarRating';
import ContactLink from '../../atoms/ContactLink/ContactLink';
import {CURRENCY_ENUM} from '../../../utils/constants';

export type Hotel = {
  id: string;
  name: string;
  location: {
    address: string;
    city: string;
    latitude: number;
    longitude: number;
  };
  stars: number;
  checkIn: {
    from: string;
    to: string;
  };
  checkOut: {
    from: string;
    to: string;
  };
  gallery: Array<string>;
  contact: {
    email: string;
    phoneNumber: string;
  };
  userRating: number;
  price: number;
  currency: keyof typeof CURRENCY_ENUM;
};

type HotelCardProps = {
  hotel: Hotel;
};

const HotelCard = ({hotel}: HotelCardProps) => {
  return (
    <Card style={styles.mainContainer}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.cardContentWrapper}>
          <ImageSlider data={hotel.gallery} />
          <View style={styles.hotelInfoSection}>
            <View style={styles.row}>
              <StarRating numberOfStars={hotel.stars} />
              <Chip style={styles.chip}>{hotel.userRating}</Chip>
            </View>
            <Text variant="titleLarge" style={styles.title}>
              {hotel.name}
            </Text>
            <AddressLink
              variant="bodyLarge"
              style={styles.addressText}
              city={hotel.location.city}
              label={hotel.location.address}
              address={hotel.location.address}
              latitude={hotel.location.latitude}
              longitude={hotel.location.longitude}
            />
            <Text variant="bodyMedium">
              <Text style={styles.label}>Check-in: </Text>
              {`from ${hotel.checkIn.from} to ${hotel.checkIn.to}`}
            </Text>
            <Text variant="bodyMedium">
              <Text style={styles.label}>Checkout: </Text>
              from {hotel.checkOut.from} to {hotel.checkOut.to}
            </Text>
            <Text style={styles.priceText} variant="titleLarge">
              {`${CURRENCY_ENUM[hotel.currency]}${hotel.price} `}
              <Text variant="bodyMedium">/night</Text>
            </Text>
            <Divider style={styles.divider} />
            <View style={styles.row}>
              <ContactLink
                variant="bodyMedium"
                contact={hotel.contact.email}
                type={'email'}
              />
              <ContactLink
                type={'phoneNumber'}
                variant="bodyMedium"
                contact={hotel.contact.phoneNumber}
              />
            </View>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  cardContent: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  cardContentWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chip: {
    width: 55,
  },
  hotelInfoSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  divider: {
    marginVertical: 10,
  },
  title: {
    fontWeight: 500,
    marginBottom: 5,
  },
  priceText: {
    textAlign: 'right',
    fontWeight: 700,
    paddingVertical: 20,
  },
  addressText: {
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  label: {
    fontWeight: 500,
  },
});

export default HotelCard;

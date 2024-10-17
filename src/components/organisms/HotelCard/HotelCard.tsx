import React from 'react';
import {Card, Chip, Divider, Text} from 'react-native-paper';
import ImageSlider from '../../molecules/ImageSlider/ImageSlider';
import {StyleSheet, View} from 'react-native';
import AddressLink from '../../atoms/AddressLink/AddressLink';
import StarRating from '../../atoms/StarRating/StarRating';
import ContactLink from '../../atoms/ContactLink/ContactLink';

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
  currency: string;
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
            <Text variant="titleLarge">{hotel.name}</Text>
            <AddressLink
              city={hotel.location.city}
              label={hotel.location.address}
              address={hotel.location.address}
              latitude={hotel.location.latitude}
              longitude={hotel.location.longitude}
            />
            <View style={styles.row}>
              <Text>{`Check-in: ${hotel.checkIn.from}->${hotel.checkIn.to}`}</Text>
              <Text>{`Checkout: ${hotel.checkOut.from}->${hotel.checkOut.to}`}</Text>
            </View>
            <Text>{`${hotel.currency}${hotel.price}`}</Text>
            <Divider style={styles.divider} />
            <View style={styles.row}>
              <ContactLink contact={hotel.contact.email} type={'email'} />
              <ContactLink
                contact={hotel.contact.phoneNumber}
                type={'phoneNumber'}
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
    paddingBottom: 16,
  },
  divider: {
    marginVertical: 10,
  },
});

export default HotelCard;

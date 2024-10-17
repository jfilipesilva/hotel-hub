import React from 'react';
import {Linking, Pressable} from 'react-native';
import {CONTACT_TYPE_ENUM} from '../../../utils/constants';
import {Text, TextProps} from 'react-native-paper';

type ContactLinkProps = Omit<TextProps<string>, 'children'> & {
  contact: string;
  type: keyof typeof CONTACT_TYPE_ENUM;
};

const ContactLink = ({contact, type, ...otherProps}: ContactLinkProps) => {
  const url = type === 'email' ? `mailto:${contact}` : `tel:${contact}`;

  return (
    <Pressable onPress={() => Linking.openURL(url)}>
      <Text {...otherProps}>{contact}</Text>
    </Pressable>
  );
};

export default ContactLink;

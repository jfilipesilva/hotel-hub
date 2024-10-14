import React from 'react';
import {Linking, Pressable} from 'react-native';
import {ContactTypeEnum} from '../../../utils/constants';
import {Text} from 'react-native-paper';

type ContactLinkProps = {
  contact: string;
  type: keyof typeof ContactTypeEnum;
};

const ContactLink = ({contact, type}: ContactLinkProps) => {
  const url = type === 'email' ? `mailto:${contact}` : `tel:${contact}`;

  return (
    <Pressable onPress={() => Linking.openURL(url)}>
      <Text>{contact}</Text>
    </Pressable>
  );
};

export default ContactLink;

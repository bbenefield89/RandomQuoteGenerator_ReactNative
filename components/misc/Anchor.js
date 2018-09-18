import React from 'react';
import { Linking, Text } from 'react-native'

const Anchor = props => {
  const openURL = url => {
    Linking.openURL('https://www.google.com')
  }
  
  return (
    <Text
      onPress={ openURL }
    >
      Twitter
    </Text>
  );
}
 
export default Anchor;
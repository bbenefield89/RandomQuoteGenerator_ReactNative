import React from 'react';
import { View, Text } from 'react-native'

const Quote = props => {
  return (
    <View>
      <Text>{ props.quote }</Text>
      <Text>{ props.author }</Text>
    </View>
  );
}
 
export default Quote;
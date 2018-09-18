import React from 'react';
import { View, Text } from 'react-native'

const Quote = props => {
  return (
    <View>
      <Text>{ props.quoteBody }</Text>
      <Text>{ props.quoteAuthor }</Text>
    </View>
  );
}
 
export default Quote;
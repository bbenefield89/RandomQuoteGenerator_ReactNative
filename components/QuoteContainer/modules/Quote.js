import React from 'react';
import { View, Text } from 'react-native'
import styled from 'styled-components'

const StyledView = styled(View)`
  margin-bottom: 15px;
`

const QuoteBody = styled(Text)`
  padding-bottom: 15px;
  font-size: 20px;
`

const Author = styled(Text)`
  text-align: right;
`

const Quote = props => {
  return (
    <StyledView>
      <QuoteBody>{ props.quote }</QuoteBody>
      <Author>- { props.author }</Author>
    </StyledView>
  );
}
 
export default Quote;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components'

import QuoteContainer from './components/QuoteContainer/QuoteContainer'

const StyledView = styled(View)`
  background: lightblue;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <QuoteContainer />
      </StyledView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

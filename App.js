import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import QuoteContainer from './components/QuoteContainer/QuoteContainer'

export default class App extends React.Component {
  render() {
    return (
      <QuoteContainer />
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

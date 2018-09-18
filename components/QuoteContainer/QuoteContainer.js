import React, { Component } from 'react';
import { Button, View, Text } from 'react-native'

import Quote from './modules/Quote'
import Anchor from '../misc/Anchor'

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteData: {
        quoteBody: '',
        quoteAuthor: ''
      },
      tweetURL: 'https://twitter.com/intent/tweet?hashtags=quotes&text='
    }
  }

  getRandomQuote = () => {
    const quoteURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  }
  
  openURL = url => {
    Linking.openURL('https://www.google.com')
  }

  render() { 
    return (
      <View>
        <Quote
          quoteBody='Hello, world'
          quoteAuthor='- Brandon Benefield'
        />

        <Button
          onPress={ this.openURL }
          title='Twitter'
        />
        
        <Button
          onPress={ () => console.log('Hello, world!') }
          title='Generate new quote'
        />
      </View>
    );
  }
}
 
export default QuoteContainer;
import React, { Component } from 'react';
import axios from 'axios'

import { Button, Linking, View, Text } from 'react-native'

import Quote from './modules/Quote'
import Anchor from '../misc/Anchor'

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteData: {
        quote: '',
        author: ''
      },
      tweetURL: 'https://twitter.com/intent/tweet?hashtags=quotes&text='
    }
  }

  // getRandomQuote
  getRandomQuote = () => {
    const quoteURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

    axios(quoteURL)
      .then(({ data }) => {
        const { quotes }        = data
        const max               = quotes.length
        const rand              = Math.floor(Math.random() * Math.floor(max))
        const randomQuote       = quotes[ rand ]
        const { quote, author } = randomQuote
        const quoteData         = { quote, author }
        let tweetURL          = this.state.tweetURL

        tweetURL += `"${ quote }" ${ author } #quote`
        
        this.setState({ quoteData, tweetURL })
      })
      .catch(err => console.log(err))
  }
  
  // openURL
  openURL = () => {
    Linking.openURL(this.state.tweetURL)
  }

  // componentDidMount
  componentDidMount() {
    this.getRandomQuote()
  }
  
  // render
  render() { 
    return (
      <View>
        <Quote
          quote={ this.state.quoteData.quote }
          author={ this.state.quoteData.author }
        />

        <Button
          onPress={ this.openURL }
          title='Twitter'
        />
        
        <Button
          onPress={ this.getRandomQuote }
          title='Generate new quote'
        />
      </View>
    );
  }
}
 
export default QuoteContainer;
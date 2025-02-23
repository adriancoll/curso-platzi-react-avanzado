// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

// Components
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-acoll-dev.vercel.app'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
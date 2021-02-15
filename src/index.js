import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App.js'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Context from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-eli.elizabethriver.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  , document.getElementById('app')
)

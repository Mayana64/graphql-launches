import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
import './App.css';
import Launches from './components/Launches'

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetMissions {
        missions {
          name
          description
          website
        }
      }
    `
  })
  .then(result => console.log(result));


function App() {

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app 🚀</h2>
        </div>
        <Launches />
      </ApolloProvider>
    </div>
  );
}

export default App;

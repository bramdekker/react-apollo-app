import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import AppBody from './AppBody';
import Title from './Title';

/* Main idea: have list or grid of posts. When clicked on a post you can see
the commejnts under it. Use Bootstrap for CSS.

Post has title and body.
With post/id/comments comments can be fetched.
*/
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Title/>
      <AppBody/>
    </ApolloProvider>
  );
}

export default App;

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from "@apollo/client";
import {onError} from '@apollo/client/link/error';
 
const errorLink = onError(({graphqlErrors, networkError})=>{
    if(graphqlErrors){
        graphqlErrors.map(({message, location, Path})=>{
            alert(`Graphql error ${message}`);
        })
    }
})

const link = from([
    errorLink,
    new HttpLink({uri: "http://localhost:6969/graphql"}),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
}); 


const index = () => {
  return <ApolloProvider client={client}> </ApolloProvider>
}

export default index

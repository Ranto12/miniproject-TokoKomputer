import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from "@apollo/client";
import {onError} from '@apollo/client/link/error';
import Form from "./Component/CreateUser/Form";
import GetUsers from "./Component/GetUsers";
 
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
  return <ApolloProvider client={client}> 
  <GetUsers/>
  <Form/>
  </ApolloProvider>
}

export default index

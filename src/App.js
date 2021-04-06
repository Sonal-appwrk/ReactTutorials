import { Greet1 } from "./components/greet";
//import Hello from "./components/Hello";
import Counter from "./components/counter";
import FunctionClick, { Classclick } from "./components/Functionclick";
import Parentcomponent from "./components/parentcomponent";
import "./App.css";
import "antd/dist/antd.css";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Form from "./components/FormHandling";
import Sign from "./components/Signupform";

import Nabvar from "./components/Nabvar";
const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});
function App() {
  let arr = [1, 2, 3, 4];
  return (
    <div>
      <div className="App">
        <ApolloProvider client={client}>
          {/* <Form/> */}
          <Nabvar /> 
        </ApolloProvider>
        {/* <Greet1 name="simar" arr={arr}>
          <p>I am the children props</p>
        </Greet1>

        <Greet1 name="ajay" />
        <Parentcomponent/>

        <Greet1 name="dev" />
        <Hello name="simar" />
        <Hello name="ajay" />
        <Hello name="dev" />
        <Hello name="manoj" /> 
        <Counter/>
        <FunctionClick/>
        <Classclick/>
         */}
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Home from "./pages";
import SigninPage from "./pages/Signin";
import SignupPage from "./pages/Signup";
import LoggedInPage from "./pages/LoggedIn";
import { StoreProvider } from "./utils/GlobalState";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/signin" component={SigninPage} exact />
              <Route path="/signup" component={SignupPage} exact />
              <Route path="/loggedin" component={LoggedInPage} exact />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Home from "./pages";
import SigninPage from "./pages/Signin";
import SignupPage from "./pages/Signup";
import LoggedInPage from "./pages/LoggedIn";
import { StoreProvider } from "./utils/GlobalState";
import ProfilePage from "./pages/Profile";
import CreateCardPage from "./pages/CreateCardPage";

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
              <Route path="/Signin" component={SigninPage} exact />
              <Route path="/Signup" component={SignupPage} exact />
              <Route path="/LoggedIn" component={LoggedInPage} exact />
              <Route path="/Profile" component={ProfilePage} exact />
              <Route path="/Create" component={CreateCardPage} exact />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Home from "./pages";
import SigninPage from "./pages/Signin";
<<<<<<< HEAD
import SignupPage from "./pages/Signup";
import Loggedin from "./pages/Loggedin";
=======
import SignupPage from "./pages/signup";
import LoggedInPage from "./pages/LoggedIn";
>>>>>>> 7638452a5c4274da7a002700e0158747b933dbfc
import { StoreProvider } from "./utils/GlobalState";
import Profile from "./components/Profile";
import createCard from "./components/CreateCard";
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
<<<<<<< HEAD
              <Route path="/Signin" component={SigninPage} exact />
              <Route path="/Signup" component={SignupPage} exact />
              <Route path="/Loggedin" component={Loggedin} exact />
              <Route path="/Profile" component={ProfilePage} exact />
              <Route path="/Create" component={CreateCardPage} exact />
=======
              <Route path="/signin" component={SigninPage} exact />
              <Route path="/signup" component={SignupPage} exact />
              <Route path="/loggedin" component={LoggedInPage} exact />
>>>>>>> 7638452a5c4274da7a002700e0158747b933dbfc
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

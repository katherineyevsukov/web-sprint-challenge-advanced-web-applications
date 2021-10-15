import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import styled from "styled-components";

import Header from "./Header";
import LambdaHeader from "./LambdaHeader";
import View from "./View";
import Login from "./Login";
import Logout from "./Logout";

const App = () => {
  return (
    <AppContainer>
      <LambdaHeader />
      <Header />

      <Switch>
        <RouteContainer>
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute path="/view" component={View} />
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </RouteContainer>
      </Switch>
    </AppContainer>
  );
};

export default App;

//Task List
//1. Create and import PrivateRoute component. - DONE
//2. Create a Route for Login pointing to '/login.' - DONE
//3. Create a PrivateRoute for View component point to '/view.'- DONE
//4. Create a PrivateRoute for Logout component pointing to '/logout.' - DONE

const AppContainer = styled.div`
  height: 100%;
`;
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`;

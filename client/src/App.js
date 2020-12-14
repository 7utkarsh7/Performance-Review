import React, { useEffect } from "react";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/dashboard";
// import PrivateRoute from "./Pages/routing/Privateroute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./redux/actions/auth";
import setAuthToken from "./utilities/setAuthToken";

if(localStorage.token){
    setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());

  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div>
       
        
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Register} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
        
        </div>
      </Router>
    </Provider>
  );
};

export default App;

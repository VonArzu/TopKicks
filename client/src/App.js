import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import "./App.css";

import Layout from "./Layouts/Layout";
import Login from "./screens/Login/Login";
// import Register from "./screens/Register/Register";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./Services/auth";

import Home from "./screens/Home/Home";
// import AllKicks from "./screens/AllKicks/AllKicks";
import Brands from "./screens/Brands/Brands";
// import kicks from "./Services/kicks";
// import CreateKick from "./screens/CreateKick/CreateKick";
// import EditKick from "./screens/EditKick/EditKick";
import KickDetail from "./screens/KickDetail/KickDetail";
import Register from "./screens/Register/Register";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      history.push("/");
    };
    handleVerify();
  }, []);

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
    history.push("/");
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login loginSubmit={loginSubmit} />
          </Route>
          <Route path="/register">
            <Register registerSubmit={registerSubmit} />
          </Route>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/kicks/:type" component={kicks} /> */}
          <Route exact path="/brands/:type" component={Brands} />
          {/* <Route path="/add-kick" component={CreateKick} /> */}
          {/* <Route exact path="/kicks/:id/edit" component={EditKick} /> */}
          <Route exact path="/kicks/:type/:id" component={KickDetail} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

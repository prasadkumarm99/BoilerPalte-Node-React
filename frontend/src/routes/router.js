import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import DashboardPage from "../screens/DashboardScreen"
import LoginPage from "../screens/LoginScreen"
import RegisterPage from "../screens/RegisterScreen"

const BoilerPlateRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LoginPage} exact={true}/>
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/register" component={RegisterPage} />
      </Switch>
  </BrowserRouter>
)

export default BoilerPlateRouter
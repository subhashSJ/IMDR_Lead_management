import React from "react";
import SignInOutContainer from "./containers";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/ResetPasswordScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import UserListScreen from "./pages/HomePageFolder/UserListScreen";
import TasksScreenUser from "./pages/TasksScreenUser";
import HelpScreen from "./pages/HelpScreen";
import DashboardScreen from "./pages/DashboardScreen";
import SettingScreen from "./pages/SettingScreen";
import Navbar from "./components/Navbar/NavbarScreen";
import UserProfileScreen from "./pages/HomePageFolder/UserProfileScreen";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={SignInOutContainer} />
          <Route exact path="/register" component={SignInOutContainer} />
          <Route
            exact
            path="/forgotpassword"
            component={() => <ForgotPasswordScreen />}
          />
          <Route
            exact
            path="/resetpassword/:resetToken"
            component={() => <ResetPasswordScreen />}
          />
           <Route exact path="/users" component={() =><UserListScreen/>}/>
           <Route exact path="/profile" component={() =><UserProfileScreen/>}/>
           
        <div>
        <Navbar/> 
        <Route exact path="/" component={() => <HomeScreen />} /> 
           <Route exact path="/"></Route>
           
         
           
          <Route exact path="/Task" component={() => <TasksScreenUser />} /> 
           <Route exact path="/Dashboard" component={() => <DashboardScreen />} />
           <Route exact path="/Help" component={() => <HelpScreen />} /> 
           <Route exact path="/Settings" component={() => <SettingScreen/>} />
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

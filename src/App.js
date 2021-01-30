import logo from './logo.svg';
// import './App.css';
import Home from './Components/Home';
import {BrowserRouter, BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import AdminDashboard from './Components/AdminDashboard';
import SignUp from './Components/SignUp';
import View from './Components/View';
import Edit from './Components/Edit';
import Welcome from './Components/Welcome';
import UserDashboard from './Components/UserDashboard';
import CameraProduct from './Components/CameraProduct';
import HeadPhoneProduct from './Components/HeadPhoneProduct';
import WatchProduct from './Components/WatchProduct';
import TshirtProduct from './Components/TshirtProduct';
import CellphoneProduct from './Components/CellphoneProduct'
import LaptopProduct from './Components/LaptopProduct';
// import OtherAdminLogin from './Components/OtherAdminLogin';




function App() {
  return (
    <div className="App">

  <BrowserRouter>    
    <Switch>  
      <Router>
        <Route path='/' exact render={()=>{return <Redirect to='/'/>}}></Route>
        <Route path="/" component={Home}></Route>
        <Route path="/welcome" component={Welcome}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/view" component={View}></Route>
        <Route path="/edit" component={Edit}></Route>
        <Route path="/adminlogin" component={AdminLogin}></Route>
        <Route path="/userlogin" component={UserLogin}></Route>
        <Route path="/admindashboard" component={AdminDashboard}></Route>
        <Route path="/userdashboard" component={UserDashboard}></Route>
        <Route path="/cameraproduct" component={CameraProduct}></Route>
        <Route path="/headphoneproduct" component={HeadPhoneProduct}></Route>
        <Route path="/watchproduct" component={WatchProduct}></Route>
        <Route path="/tshirtproduct" component={TshirtProduct}></Route>
        <Route path="/cellphoneproduct" component={CellphoneProduct}></Route>
        <Route path="/laptopproduct" component={LaptopProduct}></Route>

        </Router>
    </Switch>
  </BrowserRouter> 
   
    </div>
  );
}

export default App;

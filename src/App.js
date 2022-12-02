import logo from "./logo.svg";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Header from "./Component/Header/Header";
import { Fragment } from "react";
import Home from "./Page/Home/Home";
import DetailFilm from "./Page/DetailFilm/DetailFilm";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templete/HomeTemplate/HomeTemplate";
import { Usertemplate } from "./templete/UserTeamplate/Usertemplate";
import { CheckoutTemplate } from "./templete/CheckoutTemplate/CheckoutTemplate";
import Register from "./Page/Register/Register";
import Login from "./Page/Login/Login";
import Checkout from "./Page/Checkout/Checkout";
import InfoAccount from "./Page/User/InfoAccount/InfoAccount";
import InfoTicketBooked from "./Page/User/InfoTicketBooked/InfoTicketBooked";
import { AdminTemplate } from "./templete/AdminTemplate/AdminTemplate";
import Films from "../src/Page/Home/Admin/Films"
import AddNew from "./Page/Home/Admin/AddNew/AddNew";
import Edit from "./Page/Home/Admin/Edit/Edit";
import Showtime from "./Page/Home/Admin/Showtime/Showtime";


export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      {/* <h1 className="text-5xl">hello world</h1> */}
      <HomeTemplate path="/" exact Component={Home} />
      <HomeTemplate path="/home/:id" exact Component={Home} />
      <Route exact path="/detail/:id" component={DetailFilm} />
      <Usertemplate exact path="/register" Component={Register} />
      <Usertemplate exact path="/login" Component={Login} />
      <CheckoutTemplate exact path="/checkout/:id" component={Checkout} />
      <CheckoutTemplate exact path="/info" component={InfoAccount} />
      <Route exact path="/historyticket" component={InfoTicketBooked} />

      {/* admin: admin005 , admin0031 */}
      <AdminTemplate exact path='/admin' Component={Films} />
      <AdminTemplate exact path='/admin/films' Component={Films} />
      <AdminTemplate exact path="/admin/films/addnew" Component={AddNew} />
      <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
      <AdminTemplate exact path='/admin/films/showtime/:id' Component={Showtime} />
    </Router>
  );
}
export default App;

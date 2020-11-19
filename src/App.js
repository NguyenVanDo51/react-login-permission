import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductGuest from './pages/product/ProductGuest'
import ProductAdmin from './pages/product/ProductAdmin'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Users from './pages/user/Users'
import Cart from './pages/product/Cart'
import "./App.css"

function App(props) {

  const { user, updateUser } = props

  return (
    <Router>
      <Navbar user={user} updateUser={updateUser} />
      <div className="container">
        <Switch>
          <Route exact path="/admin/products">
            {
              user.role === "Admin" || user.role === "CTV" ? <ProductAdmin /> : <ProductGuest />
            }
          </Route>
          <Route exact path="/admin/users">
            {
              user.role === "Admin" || user.role === "CTV" ? <Users /> : <ProductGuest />
            }
          </Route>

          <Route exact path="/register">
            {user.id ? <Redirect to="/" /> : <Register />}
          </Route>

          <Route exact path="/cart">
            {user.id ? <Cart /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/login">
            {user.id ? <Redirect to="/" /> : <Login user={user} updateUser={updateUser} />}
          </Route>

          <Route exact path="/products" > <ProductGuest /></Route>

          <Route exact path="/">
            {
              user.role === "Admin" || user.role === "CTV" ? <Dashboard /> : <ProductAdmin />
            }
          </Route>



        </Switch>
      </div>
    </Router>
  );
}

export default App;

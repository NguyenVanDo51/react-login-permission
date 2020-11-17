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
import "./App.css"

function updateUser(id1, email1, role1) {
  return {
    type: "UPDATE USER",
    user: {
      id: id1,
      email: email1,
      role: role1
    },
  }
}

function App(props) {

  const { user } = props

  console.log("user", user)

  return (
    <Router>
      <Navbar user={user} setUser={props.dispatch} updateUser={updateUser} />
      <div className="container">
        <Switch>
          <Route path="/admin/products">
            {
              user.role === "Admin" || user.role === "CTV" ? <ProductAdmin /> : <ProductGuest />
            }
          </Route>
          <Route path="/admin/users">
            {
              user.role === "Admin" || user.role === "CTV" ? <Users /> : <ProductGuest />
            }
          </Route>

          <Route path="/register">
            {user.id ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/login">
            {user.id ? <Redirect to="/" /> : <Login user={user} setUser={props.dispatch} updateUser={updateUser} />}
          </Route>

          <Route path="/products" > <ProductGuest /></Route>

          <Route path="/">
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

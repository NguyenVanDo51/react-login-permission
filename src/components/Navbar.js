import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const NavBar = (props) => {

    const { user, setUser, updateUser } = props

    const logout = () => {
        axios.get('logout/?controller=User&action=logout')
        setUser(updateUser('', '', 'Member'))
    }

    return (
        <div className="my-2 mx-5 d-flex justify-content-between">
            <Link className="nav-link" to="/">Home</Link>
            <div className="mr-2">
                {user.id ?
                    <Fragment>
                        <span>Hello, {user.email}</span>
                        <button className="btn btn-primary btn-sm ml-3" onClick={logout}>Logout</button>
                    </Fragment>
                    :
                    <Fragment>
                        <Link className="btn btn-primary btn-sm mx-3" to="/login">Login</Link>
                        <Link className="btn btn-primary btn-sm" to="/register">Register</Link>
                    </Fragment>
                }
            </div>
        </div>
    )
}

export default NavBar
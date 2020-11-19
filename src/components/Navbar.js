import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Dropdown } from 'react-bootstrap'

const NavBar = (props) => {

    const { user, updateUser } = props

    const logout = () => {
        axios.get('logout/?controller=User&action=logout')
        updateUser('', '', 'Member')
    }

    return (
        <div className="my-2 mx-5 d-flex justify-content-between">
            <Link className="nav-link" to="/">Home</Link>
            <div className="mr-2">
                {user.id ?
                    <Dropdown id="dropdown-basic" >
                        <Dropdown.Toggle style={{
                            background: 'none',
                            border: 'none',
                            color: 'black',
                        }}>
                            <i className="far fa-user-circle"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>{user.email}</Dropdown.Item>
                            <Link to="cart" className="dropdown-item">Cart</Link>
                            <Dropdown.Item onClick={logout}>
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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
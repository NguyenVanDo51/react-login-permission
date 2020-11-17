import React, { useState, useEffect } from 'react';
import { getAllUser, UpdateRole } from '../../axios/user'
import styled from 'styled-components'

const Users = () => {

    const [ users, setUsers ] = useState([])

    const [ showPermission, setShowPermission ] = useState(false)

    // thang user duoc chon
    const [ userCurrent, setUserCurrent ] = useState({
        id: 0,
        role: "Member"
    })

    const [ currentRole, setCurrentRole ] = useState("Member")

    useEffect(() => {
        getAllUser()
            .then( response => {
                setUsers(response.data.users)
            })
    }, [])

    function handleShowPermission(user_id, user_role) {
        setShowPermission(!showPermission)
        setUserCurrent({
            id: user_id,
            role: user_role
        })
        setCurrentRole(user_role)
    }

    function handleUpdateRole() {
        UpdateRole(userCurrent.id, userCurrent.role)
            .then( response => {
                setShowPermission(!showPermission)
                
                getAllUser()
                .then( response => {
                    setUsers(response.data.users)
                })
            })        
    }

    return (
        <div>
            <h3>users list</h3>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map( (user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.user_id}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button className="btn btn-primary btn-sm" onClick={() => handleShowPermission(user.user_id, user.role)}>Update</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {
                showPermission ? 
                    <Modal>
                        <div className="div-modal">
                            <div className="card-header">Update role</div>
                            <div className="card-body">
                                <form>
                                    <div className="radio">
                                        <label><input className="mr-2" type="radio" 
                                            checked={ userCurrent.role === "Admin" ? true : false}
                                            onChange={ e => setUserCurrent({id: userCurrent.id, role: e.target.value}) } name="role" value="Admin" />Admin</label>
                                    </div>
                                    <div className="radio">
                                        <label><input className="mr-2" type="radio" 
                                            checked={ userCurrent.role === "CTV" ? true : false}
                                            onChange={ e => setUserCurrent({id: userCurrent.id, role: e.target.value}) } name="role" value="CTV" />CTV</label>
                                    </div>
                                    <div className="radio disabled">
                                        <label><input className="mr-2" type="radio"
                                            checked={ userCurrent.role === "Member" ? true : false}
                                            onChange={ e => setUserCurrent({id: userCurrent.id, role: e.target.value}) } name="role" value="Member" />Member</label>
                                    </div>
                                </form>
                                <button className="btn btn-primary mr-2" onClick={handleUpdateRole}>Save</button>
                                <button className="btn" type="button" onClick={ () => setShowPermission(!showPermission) }>Exit</button>
                            </div>
                        </div>
                    </Modal> 
                    : null
            }
        </div>
    )
}

export default Users

const Modal = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
    background: rgba(200, 200, 200, 0.5);
    z-index: 200;
        .div-modal {
            position: fixed;
            top: 0;
            left: 25%;
            width: 50vw;
            height: 100vh;
            padding: 1.5rem;
            z-index: 300;
            background-color:white;
        }

`
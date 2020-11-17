import axios from 'axios'

export function getUser() {
    return axios.get('/user?controller=User&action=getUser')
}

export function getAllUser() {
    return axios.get('userList', {
        params: {
            controller: "User",
            action: "index"
        }
    })
}

export function UpdateRole(userId, role1) {
    return axios.get('userRole', {
        params: {
            controller: "Permission",
            action: "index",
            user_id: userId,
            role: role1
        }
    })
}
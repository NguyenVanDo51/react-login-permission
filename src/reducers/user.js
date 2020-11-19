const defaultState = {
    id: '',
    email: '',
    role: 'Member'
};

export default function (state = defaultState, action = {}) {
    switch (action.type) {
        case 'UPDATE USER':
            return {
                ...state,
                id: action.user.id,
                email: action.user.email,
                role: action.user.role
            }
        default:
            return state;
    }
}
import { connect } from 'react-redux'
import { updateUserAction } from '../action'
import App from '../App'

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (id1, email1, role1) => {
            console.log("map updateUser: ", id1, email1)
            dispatch(updateUserAction(id1, email1, role1))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

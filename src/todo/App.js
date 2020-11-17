import { Component } from 'react'

class App extends Component {
    render() {
        const { value, onIncrement, onDecrement } = this.props
        console.log("value: ", this.props)
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>+</button>
                {' '}
                <button onClick={onDecrement}>-</button>
            </p>
        )
    }
}

export default App
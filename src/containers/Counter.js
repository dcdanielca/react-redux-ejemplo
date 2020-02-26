import {connect} from 'react-redux'
import Counter from '../components/Counter'

const mapStateToProps = state => {
    return { counter: state.counter,
            counter2: state.counter2
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'}),
        increment2: () => dispatch({type: 'INCREMENT2'}),
        decrement2: () => dispatch({type: 'DECREMENT2'})

    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(Counter)

export default ComponentWithConnectionToRedux;
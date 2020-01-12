import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Counter = ({counter}) => {
    return <h1>{`Counter component. Cunter value is: ${counter}`}</h1>
}

export const Button = () => {
    return <button>Simple button</button>
}

export class Lesson extends Component {

    static propTypes = {
        children: PropTypes.element
    }

    static defaultProps = {
        children: null
    }

    state = {
        counter: 0,
        id: 0
    }

    handleClick = () => {
        this.setState( state => ({
            ...state,
            counter: ++state.counter
        }))
    }

    render() {
        //const { counter } = this.state;
        const {children, child} = this.props;

        return (
            <div>
                {child}
                {React.cloneElement(children, {counter: this.state.counter})}
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}


// Counter.propTypes = {
//     counter: PropTypes.number.isRequired,
//     name: PropTypes.string
// }

// Counter.defaultProps = {
//     name: 'Vova'
// }

// export default CounterButton
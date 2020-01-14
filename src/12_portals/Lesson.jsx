import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';


class Portal extends Component {
    el = document.createElement('div');
    

    componentDidMount() {
        document.getElementById('root').insertAdjacentElement('afterend', this.el)
    }

    componentWillUnmount() {
        document.body.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

class Lesson extends Component {

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(({count}) => ({
            count: count + 1
        }))
    }

    render() {
        return (
            <Fragment>
                <div onClick={this.handleClick}>
                    <span>Counter: {this.state.count}</span>
                    <Portal>
                        <button>Click</button>
                    </Portal>
                </div>
            </Fragment>
        );
    }
}

export default Lesson
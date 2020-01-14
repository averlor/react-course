import React, {Component, Fragment} from 'react';
import './loadingHOC.css';

const isEmpty = (props) => (
    props === null ||
    props === undefined ||
    (props.hasOwnProperty('length') && props.length === 0) ||
    (props.constructor === Object && Object.keys(props).length === 0)
);

const loadingHOC = (loadingProps) => (WrapperComponent) => {
    return class loadingHOC extends Component {
        render() {
            return isEmpty(this.props[loadingProps]) ?
            <div className="loader" /> :
            <WrapperComponent {...this.props} />
        }
    }
}

class AppComponentUI extends Component {
    render() {
        return (
            <Fragment>
                {this.props.data.title}
            </Fragment>
        );
    }
}

const AppComponent = loadingHOC('data')(AppComponentUI);

class Lesson  extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.updateState(data))
    }
    
    updateState = (data) => {
        window.setTimeout(()=> {
            this.setState({ data })
        }, 3000)
    }

    render() {
        return (
            <Fragment>
                <AppComponent data={this.props.data} />
            </Fragment>
        )
    }
}

export default Lesson
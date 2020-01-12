import React, {Component, Fragment} from 'react';


import './Lesson.css';

const POSIOTIONS = [
    'Front-end developer',
    'Back-end developer',
    'Dev-Ops developer'
]

class Form extends Component {

    state = {
        input: '',
        textarea: '',
        select: '',
        showData: {
            name: '',
            text: '',
            position: ''
        }
    }

    onChangeInput = ({target: {value}}) => {
        this.setState({
            input: value
        })
    }

    onChangeTextarea = ({target: {value}}) => {
        this.setState({
            textarea: value
        })
    }

    onChangeSelect = ({target: {value}}) => {
        this.setState({
            select: value
        })
    }

    handleShowData = (e) => {
        e.preventDefault();
        const {input, textarea, select} = this.state;
        this.setState({
            input: '',
            textarea: '',
            select: '',
            showData: {
                name: input,
                text: textarea,
                position: select
            }
        })
    }

    render() {
        const {input, textarea, select, showData} = this.state;
        const {name, text, position} = showData;
        return (
            <Fragment>
                <form>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name"  value={input} onChange={this.onChangeInput} />

                    <label htmlFor="text">Text: </label>
                    <textarea id="text" value={textarea} onChange={this.onChangeTextarea} ></textarea>

                    <select value={select} onChange={this.onChangeSelect}>
                        {POSIOTIONS.map((pos, index) => {
                            return(
                                <option key={index} value={pos}>{pos}</option>
                            );
                        })}
                    </select>

                    <button onClick={this.handleShowData}>show</button>
                </form>

                <h2>{name}</h2>
                <p>{text}</p>
                <small>{position}</small>
            </Fragment>
        );
    }
}

export default Form
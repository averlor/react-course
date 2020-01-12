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

    handleChange = () => {
        this.setState({
            input: this.inputRef.current.value,
            textarea: this.textareaRef.current.value,
            select: this.selectRef.current.value
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

    inputRef = React.createRef();
    textareaRef = React.createRef();
    selectRef = React.createRef();

    render() {
        const {input, textarea, select, showData} = this.state;
        const {name, text, position} = showData;
        return (
            <Fragment>
                <form>
                    <label htmlFor="name">Name: </label>
                    <input ref={this.inputRef} type="text" id="name" name="name"  value={input} onChange={this.handleChange} />

                    <label htmlFor="text">Text: </label>
                    <textarea ref={this.textareaRef} id="text" value={textarea} onChange={this.handleChange} ></textarea>

                    <select ref={this.selectRef} value={select} onChange={this.handleChange}>
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
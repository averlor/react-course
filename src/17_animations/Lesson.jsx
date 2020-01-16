import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './style.css';

class Lesson extends Component {

    state = {
        isLogoVisible: false
    }

    toggleLogo  = () => {
        this.setState({
            isLogoVisible: !this.state.isLogoVisible
        })
    }

    render() {
        const {isLogoVisible} = this.state;
        return (
            <div className="wrapper">
                <div>
                    <h2>Хочешь увидеть Лого реакта, детка?</h2>
                    <input type="radio" name="logo" checked={isLogoVisible} onChange={this.toggleLogo} />Да
                    <input type="radio" name="logo" checked={!isLogoVisible} onChange={this.toggleLogo} />Нет
                </div>
                <TransitionGroup>
                    {isLogoVisible && (
                    <CSSTransition timeout={200} classNames="option">
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="logo" />
                        </div>
                    </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        );
    }
}

export default Lesson
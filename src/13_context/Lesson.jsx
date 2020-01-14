import React, { Component, Fragment } from 'react';

const TitleContext = React.createContext();

const user = {
    name: 'abc',
    familyName: 'def'
}

const LevelTree = () => (
    <TitleContext.Consumer>
        { user => (
            <Fragment>
                <h1>Name: {user.name}</h1>
                <h3>Family name: {user.familyName}</h3>
            </Fragment>
        ) }
    </TitleContext.Consumer>
);
const LevelTwo = () => <LevelTree />
const LevelOne = () => <LevelTwo />

class Lesson extends Component {
    render() {
        return (
            <Fragment>
                <TitleContext.Provider value={user}>
                    <LevelOne />
                </TitleContext.Provider>
            </Fragment>
        );
    }
}

export default Lesson
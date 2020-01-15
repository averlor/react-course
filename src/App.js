import React, {Component} from 'react';

import Lesson from './15_router/Lesson';

class App extends Component {

  render() {
    return (
      <Lesson children={this.props.children}/>
    );
  }
}

export default App;

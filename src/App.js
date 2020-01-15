import React, {Component} from 'react';

import Lesson from './16_todo/Lesson';

class App extends Component {

  render() {
    return (
      <Lesson children={this.props.children}/>
    );
  }
}

export default App;

import React, {Component, Fragment} from 'react';

import ToDo from './16_redux/container/todo';
import Title from './16_redux/components/title/title';

class App extends Component {

  render() {
    return (
      <Fragment>
          <Title title="ToDo App" />
          <ToDo />
      </Fragment>
    );
  }
}

export default App;

import React, {Component, Fragment} from 'react';

<<<<<<< HEAD
import ToDo from './16_redux/container/todo';
import Title from './16_redux/components/title/title';
=======
import Lesson from './16_todo/Lesson';
>>>>>>> a142cfd94003fec8ea594c09a3f94d4423b3bd34

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

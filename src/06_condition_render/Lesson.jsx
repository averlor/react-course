import React, {Component, Fragment} from 'react';


const Tab1 = () => {
    return (
      <div>
        <h1>text of Tab 1</h1>
        <p>Some text for Tab 1</p>
      </div>
    );
  }
  
  const Tab2 = () => {
    return <h1>text of Tab 2</h1>
  }
  
  const Tab3 = () => {
    return <h1>text of Tab 3</h1>
  }

class El extends Component {

    state = {
      activeTab: 1
    }
  
    handleTab = (e) => {
      this.setState({
        activeTab: +e.target.getAttribute('data-name')
      })
    }
  
    render() {
      const {activeTab} = this.state;
      return (
        <Fragment>
          <button data-name={1} onClick={this.handleTab}>Tab1</button>
          <button data-name={2} onClick={this.handleTab}>Tab2</button>
          <button data-name={3} onClick={this.handleTab}>Tab3</button>
  
          {activeTab === 1 ? <Tab1/> : activeTab === 2 ? <Tab2/> : <Tab3/>}
        </Fragment>
      );
  
    }
  }

export default El
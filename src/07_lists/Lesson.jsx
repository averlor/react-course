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

  const people = ['Jack', 'Max', 'Rosy'];
  const TAB_BTN = [
      {
          dataName: 1,
          title: 'Tab 1',
          icon: '+'
      },
      {
        dataName: 2,
        title: 'Tab 2',
        icon: '-'
      },
      {
        dataName: 3,
        title: 'Tab 3',
        icon: '*'
      }
  ]

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
            {TAB_BTN.map(({dataName, title, icon}) => {
                return (
                    <button
                        key = {`${title}-${dataName}`}
                        data-name={dataName}
                        onClick={this.handleTab}
                    >{icon}{title}
                    </button>
                );
            })}
  
          {activeTab === 1 ? <Tab1/> : activeTab === 2 ? <Tab2/> : <Tab3/>}


          <ul>
              {people.map((name, index) => {
              return <li key={index}>{name}</li>
              })}
          </ul>
        </Fragment>
      );
  
    }
  }

export default El
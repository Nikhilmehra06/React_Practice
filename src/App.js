import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Person from './components/Person';
import Header from './components/Header';
import Inline from './components/Inline';
import './appStyle.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline /> */}
        {/* <Header primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}

        {
          //Functional Component
          /* <Greet name="Jhon" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Alice" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Bob" heroName="Woder Women" /> */
        }

        {
          //Class Component
          //  <Welcome name="bruce" heroName="Batman" />
          //  <Welcome name="Jhon" heroName="Batman" />
        }

        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;

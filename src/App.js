import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Naresh', age: 20 },
      { name: 'Suresh', age: 1 },
      { name: 'Mr John', age: 1 }

    ]
  }

  swithHandler = (newName) => {

    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'testing', age: 1 },
        { name: 'world', age: 1 }

      ]
    });
    console.log(" called swith handler ");
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Naresh D', age: 20 },
        { name: 'Hello', age: 1 },
        { name: event.target.value, age: 1 }

      ]
    });
    // console.log(" called swith handler ");
  }
  render() {
    return (
      //this is rjx 
      <div className="App">
        <h1> this is first react js application </h1>
        <p> this is works fine</p>
        <button onClick={this.swithHandler.bind(this,'Naresh !!!!!!!!!!!!!!!')}> switchMe</button>
        <Person

          name={this.state.persons[0].name}
          age={this.state.persons[0].age} >

        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} >


        </Person>
        <Person
          changed ={this.nameChangeHandler}
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >


        </Person>

      </div>



      //React.createElement('div',{className:'App'},React.createElement('h1',null,'HI \, This is first application in react'))
    );
  }
}

export default App;

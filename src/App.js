import React, { Component } from "react";
// import styled from "styled-components";
// import Radium, { StyleRoot } from "radium";
// import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person.js";

// const StyledButton = styled.button`
//   background-color: ${(props) => (props.myAlt ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 1px solid black;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) => (props.myAlt ? "salmon" : "lightgreen")};
//     color: black;
//   }
// `;
class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  // switchNameHandler = (newName) => {
  //   // console.log("was clicked!");
  //   // dont = > this.state.persons[0]
  //   this.setState({
  //     persons: [
  //       {
  //         name: newName,
  //         age: 28,
  //       },
  //       {
  //         name: "Manu",
  //         age: 28,
  //       },
  //       {
  //         name: "Steph",
  //         age: 27,
  //       },
  //     ],
  //   });
  // };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_1_element_at_index_3
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // copy of the person object at index
    const person = {
      ...this.state.persons[personIndex],
    };
    // change that person at index
    person.name = event.target.value;
    // person.id = event.target.value;
    //
    const persons = [...this.state.persons];
    // main state is changed at index with person
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  /* <button onClick={this.switchNameHandler.bind(this, "Maximilian")}></button> */
  render() {
    const style = {};
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!!!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }

    const classess = [];
    if (this.state.persons.length <= 2) {
      classess.push("red"); // classess red
    }
    if (this.state.persons.length <= 1) {
      classess.push("bold"); // classess red
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p className={classess.join(" ")}>this is really working</p>
        <button
          style={style}
          // below uses a anno fuction => implicit return
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {/* <StyledButton
          myAlt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton> */}
        {/* {this.state.showPersons ? ( */}
        {persons}
        {/* ) : null} */}
      </div>
    );
    // return React.createElement("div", null, "h1", "Hi I'm a React App!!!");
    // nested below
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi I'm a React App!!!")
    // );
  }
}

// export default Radium(App);
export default App;
/// using Web Hooks :

// import React, { useState } from "react";
// // import logo from "./logo.svg";
// import "./App.css";
// import Person from "./Person/Person.js";

// const app = (props) => {
//   // class App extends Component {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {
//         name: "Max",
//         age: 28,
//       },
//       {
//         name: "Manu",
//         age: 28,
//       },
//       {
//         name: "Steph",
//         age: 26,
//       },
//     ],
//     // otherState: "some other value",
//   });

//   const [otherState, setOtherState] = useState({
//     otherState: "some other value",
//   });
//   // call otherState
//   console.log(personsState, otherState);

//   const switchNameHandler = (newName) => {
//     // console.log("was clicked!");
//     // dont = > this.state.persons[0]
//     setPersonsState({
//       persons: [
//         {
//           name: "Maximilian",
//           age: 28,
//         },
//         {
//           name: "Manu",
//           age: 28,
//         },
//         {
//           name: "Steph",
//           age: 27,
//         },
//       ],
//       // otherState: personsState.otherState,
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi I'm a React App</h1>
//       <p>this is really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//         click={switchNameHandler}
//       >
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
//   // return React.createElement("div", null, "h1", "Hi I'm a React App!!!");
//   // nested below
//   // return React.createElement(
//   //   "div",
//   //   { className: "App" },
//   //   React.createElement("h1", null, "Hi I'm a React App!!!")
//   // );
// };

// export default app;

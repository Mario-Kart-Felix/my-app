import React, { Component } from "react";
// import styled from "styled-components";
// import Radium from "radium";
import classes from "./Person.css";

// const StyleDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        {/* <StyleDiv> */}
        <p onClick={this.props.click}>
          I'm a {this.props.name}! and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        {/* </StyleDiv> */}
      </div>
    );
  }
}

// export default Radium(person);
export default Person;

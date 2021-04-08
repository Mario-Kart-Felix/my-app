import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>this is really working</p>
      <button
        // style={style}
        // className={btnClass.join(" ")}
        className={btnClass}
        // below uses a anno fuction => implicit return
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;

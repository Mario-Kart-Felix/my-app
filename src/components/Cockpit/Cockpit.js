import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // http request...
    setTimeout(() => {
      alert("saved data to cloud");
    }, 1000);
    return () => {
      console.log("[cockpit.js] cleanup work in useEffect");
    };
  }, []);
  // use [] to run after component destroyed
  // or  [props.persons] runs when listed props changes

  //
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    // http request...

    return () => {
      console.log("[cockpit.js] cleanup work in 2nd useEffect");
    };
  }); // runs on every update cycle with no args

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
      <h1>{props.title}</h1>
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

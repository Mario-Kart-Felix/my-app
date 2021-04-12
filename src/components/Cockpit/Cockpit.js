import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";
const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  // this doesn't work as it is call b4 the render
  // toggleBtnRef.current.click();

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // http request...
    // setTimeout(() => {
    //   alert("saved data to cloud");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[cockpit.js] cleanup work in useEffect");
    };
  }, []);
  // use [] for run only on first render
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
        ref={toggleBtnRef}
        // style={style}
        // className={btnClass.join(" ")}
        className={btnClass}
        // below uses a anno fuction => implicit return
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}> Log in </button>}
      </AuthContext.Consumer>
    </div>
  );
};
// conditional render
export default React.memo(cockpit);

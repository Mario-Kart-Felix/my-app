import React from "react";

// const withClass = (props) => (
//   <div className={props.classes}>{props.children}</div>
// );

const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      {/* use the ... opperator to copy the props object */}
      <WrappedComponent {...props} />
    </div>
  );
};
export default withClass;

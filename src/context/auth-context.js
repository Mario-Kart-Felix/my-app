import React from "react";

const authContext = React.createContext({
  authenticated: false,
  login: () => {},
  test: true,
});

export default authContext;

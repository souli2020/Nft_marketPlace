import React, { useState } from 'react';

const Context = React.createContext();

function ContextProvider(props) {
  const [show, setShow] = useState(false);

  function logOut() {
    setShow(true);
  }
  function logIn() {
    setShow(false);
  }

  return (
    <Context.Provider value={{ show, logOut, logIn }}>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

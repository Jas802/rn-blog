import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  //automated function to set up Context and Provider
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Context.Provider value={{ state }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};

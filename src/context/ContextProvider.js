import React from 'react'

export const Context = React.createContext();

const ContextProvider = (props) => {
  return (
    <Context.Provider value={{ test: 0 }}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
import React, { useReducer } from 'react'

export const Context = React.createContext();

const cardReducer = (state, action) => {
  switch(action.type){
    case 'addToCard':
      return ({ ...state, card: [...state.card, action.payload] })
    case 'cardDisplay':
      return ({...state, showCard: !state.showCard})
    default:
      return state
  }
}

const ContextProvider = (props) => {

  const [cardState, dispatch] = useReducer(cardReducer, {
    card: [],
    totalAmount: 0,
    showCard: false
  })

  const onDisplay = () => {
    dispatch({type: 'cardDisplay'})
  }

  return (
    <Context.Provider value={{ cardState, onDisplay }}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
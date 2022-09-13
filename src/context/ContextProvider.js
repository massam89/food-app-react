import React, { useReducer } from 'react'
import {items} from '../database/items.js'
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

  const addToCard = (item) => {
    console.log(items);
  }

  return (
    <Context.Provider value={{ cardState, onDisplay, addToCard }}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
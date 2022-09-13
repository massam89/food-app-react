import React, { useReducer, useEffect } from 'react'
import {items} from '../database/items.js'
export const Context = React.createContext();

const cardReducer = (state, action) => {
  switch(action.type){
    case 'addToCard':
      return ({ ...state, card: [...state.card, action.payload] })
    case 'cardDisplay':
      return ({...state, showCard: !state.showCard})
    case 'addAmount':
      state.card[action.payload.id].amount = state.card[action.payload.id].amount + action.payload.amount
      return {...state}
    case 'addTotalAmount':
      return ({...state, totalAmount: action.payload})
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

  useEffect(() => {
    const sum = cardState.card.reduce((acc, cur) => {
      return acc + (cur.amount * cur.price)
    }, 0)

    dispatch({type: 'addTotalAmount', payload: sum})
   
  }, [cardState.card])

  const onDisplay = () => {
    dispatch({type: 'cardDisplay'})
  }

  const addToCard = (data) => {
    let itemData = items.find(item => item.id == data.id)
    itemData = {...itemData, amount: +data.value}

    if(!cardState.card.some(item => item.id == data.id)){
      dispatch({type: 'addToCard', payload: itemData})
    } else {
      dispatch({type:'addAmount', payload:itemData})
    }  
  }

  return (
    <Context.Provider value={{ cardState, onDisplay, addToCard }}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
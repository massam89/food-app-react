import React, { useReducer, useEffect } from 'react'
import {items} from '../database/items.js'

export const Context = React.createContext({
  card: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

const defaultCardState = {
  card: [],
  totalAmount: 0,
  showCard: false,
  addToCard: () => {},
  removeFromCard: () => {}
}

const cardReducer = (state, action) => {
  switch(action.type){
    case 'DISPLAY':
      return {...state, showCard: !state.showCard}
    case 'ADD':

      let updatedItems;

      if(state.card.some(item => item.id === action.item.id)){
        const selectedItemIndex = items.findIndex(item => item.id === action.item.id)
        const existingItem = state.card[selectedItemIndex]
        const updateItem = {...existingItem, amount: existingItem.amount + action.item.amount}
        
        updatedItems = [...state.card]
        updatedItems[selectedItemIndex] = updateItem

        return {...state, card: updatedItems}

      }else {
        const selectedItem = items.find(item => item.id === action.item.id)
        selectedItem.amount = action.item.amount
  
        updatedItems = [...state.card, selectedItem]
  
        return {...state, card: updatedItems}
      }
      
    default:
      return defaultCardState
  }
}

const ContextProvider = (props) => {

  const [cardState, dispatch] = useReducer(cardReducer, defaultCardState)

  const onDisplay = () => {
    dispatch({type: 'DISPLAY'})
  }

  const addToCard = (item) => {
    dispatch({type: 'ADD', item: item})
  }

  const removeFromCard = (id) => {

  }



  return (
    <Context.Provider value={{ cardState, onDisplay, addToCard, removeFromCard }}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
import React, { useReducer } from 'react'
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

        const updatedTotalAmount = updatedItems.reduce((cur, item) =>{
          return cur + (item.price * item.amount)
        },0)

        return {...state, card: updatedItems, totalAmount: updatedTotalAmount}
      }else {
        const selectedItem = items.find(item => item.id === action.item.id)
        selectedItem.amount = action.item.amount
  
        updatedItems = [...state.card, selectedItem]

        const updatedTotalAmount = updatedItems.reduce((cur, item) =>{
          return cur + (item.price * item.amount)
        },0)
  
        return {...state, card: updatedItems, totalAmount: updatedTotalAmount}
      }
      case 'REMOVE':
        let updatedItems2;
        const selectedItemIndex = items.findIndex(item => item.id === action.id)
        const existingItem = state.card.find(item => item.id === action.id)
        const updatedItem = {...existingItem, amount: existingItem.amount - 1 }

        updatedItems2 = [...state.card]
        updatedItems2[selectedItemIndex] = updatedItem

        const updatedTotalAmount = updatedItems2.reduce((cur, item) =>{
          return cur + (item.price * item.amount)
        },0)

        return {...state, card: updatedItems2, totalAmount: updatedTotalAmount}
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
    dispatch({type: 'REMOVE', id: id})
  }



  return (
    <Context.Provider value={{ cardState, onDisplay, addToCard, removeFromCard }}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
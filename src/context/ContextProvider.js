import React, { useReducer } from 'react'

export const Context = React.createContext({
  card: [],
  totalAmount: 0,
  showCard: false,
  addItem: (item) => {},
  removeItem: (id) => {}
});

const defaultCardState = {
  card: [],
  totalAmount: 0,
  showCard: false,
  meals: [],
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
        const selectedItemIndex = state.card.findIndex(item => item.id === action.item.id)
        const existingItem = state.card[selectedItemIndex]
        const updateItem = {...existingItem, amount: existingItem.amount + action.item.amount}
        
        updatedItems = [...state.card]
        updatedItems[selectedItemIndex] = updateItem

        const updatedTotalAmount = updatedItems.reduce((cur, item) =>{
          return cur + (item.price * item.amount)
        },0)

        return {...state, card: updatedItems, totalAmount: updatedTotalAmount}
      }else {
        const selectedItem = state.meals.find(item => item.id === action.item.id)
        selectedItem.amount = action.item.amount
  
        updatedItems = [...state.card, selectedItem]

        const updatedTotalAmount = updatedItems.reduce((cur, item) =>{
          return cur + (item.price * item.amount)
        },0)
  
        return {...state, card: updatedItems, totalAmount: updatedTotalAmount}
      }
      case 'REMOVE':
        let updatedItems2;
        const selectedItemIndex = state.card.findIndex(item => item.id === action.id)
        const existingItem = state.card.find(item => item.id === action.id)
        const updatedItem = {...existingItem, amount: existingItem.amount - 1 }

        updatedItems2 = [...state.card]

        if(updatedItem.amount === 0) {
          updatedItems2.splice(selectedItemIndex, 1)
        } else {
          updatedItems2[selectedItemIndex] = updatedItem
        }

        
        const updatedTotalAmount = updatedItems2.reduce((cur, item) =>{
          return cur + (item.price * item.amount)
        },0)

        return {...state, card: updatedItems2, totalAmount: updatedTotalAmount}
      case 'MEALS':
        return {...state, meals: action.meals}
      case 'CLEAR':
        return {...state, card: [], showCard:true, totalAmount: 0}
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

  const addMeals = (meals) => {
    dispatch({type: 'MEALS', meals: meals})
  }

  const clearCard = () => {
    dispatch({type: 'CLEAR'})
  }

  return (
    <Context.Provider
      value={{
        cardState,
        onDisplay,
        addToCard,
        removeFromCard,
        addMeals,
        clearCard,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider
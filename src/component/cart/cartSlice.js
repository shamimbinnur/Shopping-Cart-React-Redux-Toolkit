import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
        if (state.items.find( item => item.productCode === action.payload.productCode )) {
            state.items = state.items.map( item => {
                if ( item.productCode === action.payload.productCode ) return {...item,qty: item.qty+1}
                else return item
            })
            return
        }
        state.items.push(action.payload)
    },
    removeItem(state, action) {
        state.items = state.items.filter(item => item.productCode !== action.payload.productCode)
    },
    decrementQty(state, action) {
        state.items = state.items.map( item => {
            if ( item.productCode === action.payload.productCode ) return {...item,qty: item.qty < 2 ? item.qty : item.qty-1}
            else return item
        })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, getTotalItemPrice, decrementQty } = cartSlice.actions

export default cartSlice.reducer
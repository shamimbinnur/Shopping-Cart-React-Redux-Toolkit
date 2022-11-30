import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../component/cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice
  },
})
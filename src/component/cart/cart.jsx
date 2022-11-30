import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, decrementQty, addItem } from './cartSlice'


const Cart = () => {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const getCartInsights = (items) => {
    let insights = {
      totalProducts: items.length,
      totalProductPrice: 0,
    }

    items.forEach(item => {
      insights.totalProductPrice += item.price * item.qty
    });

    return insights
  }

  return (
    <div className="w-[40%] bg-gray-200 ring-1 ring-green-400 p-4 rounded-md ">
      <div className="flex flex-col gap-3">
        <div>
          <p>
            Items: {getCartInsights(items).totalProducts}
          </p>
          <p>
            Price: {getCartInsights(items).totalProductPrice}
          </p>
        </div>
        {
          items.map( (item) => 
            <div key={item.productCode} className="p-2 bg-gray-100 rounded-md">
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.productCode}</p>
              <p>QTY: {item.qty}</p>

              <div className="flex gap-2">
                <button
                    onClick={()=> dispatch(removeItem({productCode: item.productCode}))}
                    className="px-2 my-2 py-1 font-semibold shadow-md ring-1 ring-gray-200 rounded-md bg-green-400 text-xs">Remove
                </button>
                <button
                    onClick={()=> dispatch(decrementQty({productCode: item.productCode}))}
                    className="px-2 my-2 py-1 font-semibold shadow-md ring-1 ring-gray-200 rounded-md bg-red-300 text-xs">-
                </button>
                <button
                    onClick={()=> dispatch(addItem({productCode: item.productCode}))}
                    className="px-2 my-2 py-1 font-semibold shadow-md ring-1 ring-gray-200 rounded-md bg-green-300 text-xs">+
                </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart
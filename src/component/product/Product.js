import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../cart/cartSlice'

const Product = ({productDetails: {productCode, title, price}}) => {
    const dispatch = useDispatch()

    return (
    <div className="max-w-sm w-[200px] ring-1 ring-gray-400 text-gray-700 bg-gray-50 rounded-md p-3 border-2 drop-shadow-md ">
        <p className="text-xl">{title}</p>
        <p className="text-md">Price: {price}</p>
        <p className="text-sm">Product code: {productCode}</p>
        <button
            onClick={()=> dispatch(addItem({productCode,title, price, qty: 1}))}
            className="px-2 py-1 my-2 font-semibold shadow-md ring-1 ring-gray-200 rounded-md bg-green-400 text-xs">Add to cart
        </button>
    </div>
    )
}

export default Product
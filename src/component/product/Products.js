import React from 'react'
import Product from './Product'

const productList = [
  {
    productCode: "CN01",
    title: "Canon 750D",
    price: 800
  },
  {
    productCode: "CN02",
    title: "Canon 450D",
    price: 600
  },
  {
    productCode: "CN03",
    title: "Macbook Air M1",
    price: 1000
  },
  {
    productCode: "CN04",
    title: "Macbook Pro M1",
    price: 1400
  },
  {
    productCode: "CN05",
    title: "Apple Watch 6",
    price: 4000
  },
  {
    productCode: "CN06",
    title: "Apple Watch 7",
    price: 7000
  },
]

const Products = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {
        productList.map( product =>(
          <div
            key={product.productCode}>
            <Product productDetails={product} />
          </div>
        ))
      }
    </div>
  )
}

export default Products
import React, { useState } from 'react'
import { MyContext } from './CreateContext'

const Provider = ({children}) => {
    const [product, setProduct] = useState(null)
    const [cart, setCart] = useState([]);
    // console.log(product)
  return (
    <MyContext.Provider value={{product, setProduct, cart, setCart}}>{children}</MyContext.Provider>
  )
}

export default Provider
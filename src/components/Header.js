import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

function Header() {
    const {cartItems} = useContext(Context)
    // console.log(cartItems)  
    const cartClassName = cartItems.length == 0 ? "ri-shopping-cart-line" : "ri-shopping-cart-fill"
    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                <i className={`${cartClassName} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header

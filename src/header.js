import React from 'react';
import {Link} from "react-router-dom"

function Header(){
    return(
        <header className="header">
            <h1>Plan For The Day</h1>
            <Link to="/">Home</Link>  |   
            <Link to="/about"> About</Link>  |   
            <Link to="/contact"> Contact</Link>
        </header>
    )
}
export default Header




/**********************************
 * @author herman muhereza        *
 * <hermanmuhereza22@gmail.com>   *
 * <king.herman0001@gmail.com>    *
 *                                *
 **********************************/
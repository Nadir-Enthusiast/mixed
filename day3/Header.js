import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
        <Link to="/">
            <img 
                className='header-logo'
                src='https://previews.123rf.com/images/maclife/maclife1701/maclife170100008/70448471-dragon-logo-vector-icon-design.jpg'
                alt=""
            />
        </Link>

        <div
            className='header-search'>
            <input className='header-searchInput' type='text' />
            <SearchIcon className='header-searchIcon'/>
        </div>

        <div className='header-nav'>

            <div className='header-option'>
                <span className='header-optionLine-one'>
                    Hello, visitor
                </span>
                <span className='header-optionLine-two'>
                    Sign In
                </span>
            </div>

            <div className='header-option'>
                <span className='header-optionLine-one'>
                    Perks and
                </span>
                <span className='header-optionLine-two'>
                    Offers
                </span>
            </div>

            <div className='header-option'>
                <span className='header-optionLine-one'>
                    Account
                </span>
                <span className='header-optionLine-two'>
                    Premium
                </span>
            </div>

            <Link to="/checkout">
                <div className='header-optionCart'>
                    <ShoppingCartIcon />
                    <span className='header-optionLine-two header-cartCount'>0</span>
                </div>
            </Link>

        </div>

    </div>
  )
}

export default Header

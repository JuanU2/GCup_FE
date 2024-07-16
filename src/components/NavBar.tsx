import MenuButton from '../images/menu.svg'
import Icon from '../images/icon.svg'
import './NavBar.css'
import { Link } from 'react-router-dom';
import React from 'react'

export function toggleMenu() {
    const menu = document.querySelector('.navbar__options');
    menu?.classList.toggle('open');
  }

export default function NavBar(props: {options?: {name: string, ref: string}[]}) {
  return (
    <>
    <nav className="navbar">
        <div className='navbar__bar'>
            <Link to='/' className="navbar__headline">
                <img src={Icon} alt="gessay icon" className='navbar__headline__icon' />
                <h1 className="navbar__headline__text">
                    Gessayov Cup
                </h1>
            </Link>
            <img src={MenuButton} alt="Menu Obrázok" className='navbar__menu-button' onClick={toggleMenu} />
        </div>
        <div className="navbar__options" id='menu-options'>
            {props.options?.map(option => <Link to={option.ref} key={option.name} className="navbar__menu__option">{option.name}</Link>)}
        </div>
    </nav>
    </>
  )
}
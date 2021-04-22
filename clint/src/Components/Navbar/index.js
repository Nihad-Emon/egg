import React from 'react'
import logoa from "../../Images/logoa.jpg"


import{
    Nav,
    NavLink,
    NavBtn,
    NavMenu,
    NavBtnLink,
    NavimgLink,
} from './navbar-home-elements';

const Navbarhome = () => {
    return (
        <>
            <Nav>
                <NavimgLink to='/'>
                    <img src={logoa} width="30px" height="30px"/>
                    <p title="Engineers' Grooming Guide">egg</p>
                </NavimgLink>
           

            <NavMenu>
                <NavLink to='/create-account' activeStyle title="Create Account">
                    Join egg
                </NavLink>

                <NavBtn>
                <NavBtnLink to='/signin'>
                    Sign in
                </NavBtnLink>
            </NavBtn>

            </NavMenu>

            
            </Nav>
            
        </>
    )
}

export default Navbarhome;

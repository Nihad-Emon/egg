import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const Nav = styled.nav`
    /* background:#4863A0; */
    background:#fff;
    height:50px;
    display:flex;
    justify-content:space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2 );
    /* z-index:100; */
`

export const NavimgLink = styled(Link)`
    color: #000;
    display:flex;
    align-items:center;
    text-decoration:none;
    font-weight:bold;
    font-size:30px;
    padding:0 1rem;
    height: 100%;
    cursor: pointer;
`

export const NavLink = styled(Link)`
    color: #000;
    font-weight:bold;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color:#15cdfc;
    }

    &:hover{
        transition: all 0.2s ease-in;
        background:gray;
        color: #010606;
    }
`

export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right: 0px;

    /* @media screen and(max-width: 750px){
        display:none;
    } */
`

export const NavBtn = styled.nav`
    display:flex;
    
    align-items:center;
    margin-right:0px;
/* 
    @media screen and (max-width: 750px){
        display:none;
    } */
`

export const NavBtnLink = styled(Link)`
    position: relative;
    border: 1px solid blue;
    left:15px;
    border-radius: 30px;
    background: #fff;
    color: #000;
    padding: 10px 22px;
    outline:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#4863A0;
        color: #010606;
        font-size:20px;
    }

    &.active{
        color:#15cdfc;
    }
`
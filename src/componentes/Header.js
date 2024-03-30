import React from 'react'
import logo from '../logo.svg';
import Navbar from './Nabvar';

export const Header = () => {
    return (
        <>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar/>
      </header>
      </>
    )
}
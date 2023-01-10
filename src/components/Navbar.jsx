import React from 'react'
import Navbar from '../components/NavbarComponents'

function NavbarComponents ({src}) {
    return (
        <div>
            <img src={src} width="40px" alt="navbar components"/>
        </div>
    )};



function Navbar () {
    return (
        <>
        <div className="navbar">
            <ul>
                <NavbarComponents src={} alt="option"/>
                <NavbarComponents src={} alt="option"/>
                <NavbarComponents src={} alt="option"/>
                <NavbarComponents src={} alt="option"/>
                <NavbarComponents src={} alt="option"/>
                <NavbarComponents src={} alt="option"/>
                <NavbarComponents src={} alt="option"/>
                <NavbarComponents src={} alt="option"/>
            </ul>

        </div>
        </>
    )
}

export default Navbar;
export default NavbarComponents;
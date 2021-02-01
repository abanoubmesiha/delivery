import React from 'react'
import logo from '../assets/images/logo/logo.svg';

export default function Header() {
    return (
        <header>
            <div className="row d-flex align-items-center justify-content-center m-0">
                <div className="col-6 text-center">
                    <img src={logo} alt="logo" />
                </div>
                <div className="offset-1 col">
                    <a href="#Home">Home</a>
                    <a href="#Services">Services</a>
                    <a href="#About">About</a>
                    <a href="#How">How It Works</a>
                    <a href="#Testimonials">Testimonials</a>
                </div>
            </div>
        </header>
    )
}

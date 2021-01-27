import React from 'react'
import logo from '../images/logo/logo.svg';

export default function Header() {
    return (
        <header>
            <div className="row d-flex align-items-center justify-content-center m-0">
                <div className="col-6 text-center">
                    <img src={logo} alt="logo" />
                </div>
                <div className="offset-1 col">
                    <label>Home</label>
                    <label>Services</label>
                    <label>About</label>
                    <label>How It Works</label>
                    <label>Testimonials</label>
                </div>
            </div>
        </header>
    )
}

import React from 'react'
import logo from '../images/logo/logo.svg';

export default function Header() {
    return (
        <header>
            <div className="row d-flex align-items-center justify-content-center m-0">
                <div className="col-5 text-center">
                    <img src={logo} alt="logo" />
                </div>
                <div className="col-1">Home</div>
                <div className="col-1">Services</div>
                <div className="col-1">About</div>
                <div className="col-1">How It Works</div>
                <div className="col-1">Testimonials</div>
            </div>
        </header>
    )
}

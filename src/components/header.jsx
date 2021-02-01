import React from 'react'
import logo from '../assets/images/logo/logo.svg';

export default function Header() {
    return (
        <header>
            <div className="row d-flex align-items-center justify-content-center m-0">
                <div className="col-sm-12 col-lg-5 text-center">
                    <img src={logo} alt="logo" />
                </div>
                <div className="col-sm-0 col-lg-1" />
                <div className="col-sm-12 col-lg-auto text-center">
                    <a href="#Home">Home</a>
                </div>
                <div className="col-sm-12 col-lg-auto text-center">
                    <a href="#Services">Services</a>
                </div>
                <div className="col-sm-12 col-lg-auto text-center">
                    <a href="#About">About</a>
                </div>
                <div className="col-sm-12 col-lg-auto text-center">
                    <a href="#How">How It Works</a>
                </div>
                <div className="col-sm-12 col-lg-auto text-center">
                    <a href="#Testimonials">Testimonials</a>
                </div>
                <div className="col-sm-12 col-lg-1"></div>
            </div>
        </header>
    )
}

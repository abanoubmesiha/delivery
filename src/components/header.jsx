import React from 'react'

export default function Header() {
    return (
        <header>
            <div className="row d-flex align-items-center">
                <div className="col-5">
                    <img src="/images/logo/logo.svg" alt="logo" />
                </div>
                <div className="col-1"></div>
                <div className="col-1">Home</div>
                <div className="col-1">Services</div>
                <div className="col-1">About</div>
                <div className="col-1">How It Works</div>
                <div className="col-1">Testimonials</div>
            </div>
        </header>
    )
}

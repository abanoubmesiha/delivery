import React from 'react'

export default function Header(props) {
    const { header } = props.data;
    return (
        <div className="row d-flex align-items-center justify-content-center m-0">
            <div className="col-sm-12 col-lg-5 text-center">
                <img src={require(`../assets/images/${header.logo}`).default} alt="logo" />
            </div>
            <div className="col-sm-0 col-lg-1" />
            {header.navLinks.map((navLink, i)=>(
                <div key={i} className="col-sm-12 col-lg-auto text-center">
                    <a href={`#${navLink.id}`}>{navLink.label}</a>
                </div>
            ))}
            <div className="col-sm-12 col-lg-1"></div>
        </div>
    )
}

import React from 'react'
import '../../assets/styles/components/home.sass'

export default function Home(props) {
    const { home } = props;
    return (
        <div id="Home" className="mb-5">
            <div className="row d-flex align-items-center with-leaf">
                <div className="col-sm-12 col-lg-6 p-3">
                    <div className="row">
                        <div className="offset-sm-1 offset-lg-3 col d-flex">
                            <h1 className="strong">{home.titleBold}</h1>
                            <h1>&nbsp;</h1><h1>{home.afterTitle}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-sm-1 offset-lg-3 col">
                            <h1>{home.underTitle}</h1>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="offset-sm-1 offset-lg-3 col">
                            {home.description}
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-sm-1 offset-lg-3 col">
                            <button className="red-btn">{home.buttonLabel}</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 py-5">
                    <img src={require(`../../assets/images/home/${home.img}`).default} alt="home" />
                </div>
            </div>
        </div>
    )
}

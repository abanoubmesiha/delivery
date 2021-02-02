import React from 'react'
import '../../assets/styles/components/home.sass'

export default function Home(props) {
    const { home } = props.data;
    return (
        <div id="Home">
            <section>
                <div className="row">
                    <div className="col d-flex">
                        <h1 className="strong">{home.titleBold}</h1>
                        <h1>&nbsp;</h1><h1>{home.afterTitle}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1>{home.underTitle}</h1>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-sm-12 col-md-6">
                        {home.description}
                    </div>
                </div>
                <button className="red-btn">{home.buttonLabel}</button>
            </section>
        </div>
    )
}

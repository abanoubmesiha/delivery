import React from 'react'
import '../../assets/styles/components/about.sass'

export default function How(props) {
    let banner = <div className="col-sm-12 col-lg-6 mb-4">
                    <img className="banner" src={require(`../../assets/images/how/${props.banner}`).default} alt="how-banner" />
                </div>;
    return (
        <div id="How" className="mb-10">
            <section>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-10 col-lg-9">
                    <div className="row">
                        {!props.inverse && banner}
                        <div className="col-sm-12 col-lg-6">
                            <h5 className="strong mb-4">{props.title}</h5>
                            <h2 className="strong mb-4">{props.secondTitle}</h2>
                            <p>{props.description}</p>
                            {props.download && <button className="red-btn">Download App</button>}
                        </div>
                        {props.inverse && banner}
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

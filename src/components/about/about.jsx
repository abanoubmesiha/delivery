import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../../assets/styles/components/about.sass'

export default function About(props) {
    const { about } = props.data
    return (
        <div id="About">
            <section>
                <div className="row mx-5 p-5">
                    <div className="col-sm-12 col-lg-6">
                        <img src={require(`../../assets/images/about/${about.banner}`).default} alt="about-banner" />
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <h5 className="strong mb-4">{about.title}</h5>
                        <h2 className="strong mb-4">{about.secondTitle}</h2>
                        <p>{about.description}</p>
                        <h6 className="strong d-inline">Rating {about.rating}</h6>
                        {Array(Math.round(about.rating)).fill(<FontAwesomeIcon icon={faStar} />)}
                        <div className="row mt-4 mx-0">
                            <div className="col red-square">
                                <div className="row">
                                    {about.statistics.map((data, i)=>{
                                        const { length } = about.statistics;
                                        let { value } = data;
                                        if (value >= 1000000){
                                            value = value / 1000000
                                            value = `${Math.round(value)}M+` 
                                        } else if (value > 1000){
                                            value = value / 1000
                                            value = `${Math.round(value)}K+` 
                                        } 
                                        return (
                                        <div className={`col-sm-12 col-lg-${Math.round(12/length)} ${length-1 === i?'':'border-right'}
                                         d-flex justify-content-center`}>
                                            <div>
                                                <h3 className="text-white strong">{value}</h3>
                                                <h6 className="text-white strong">{data.label}</h6>
                                            </div>
                                        </div>
                                    )})}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
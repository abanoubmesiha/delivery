import React from 'react'
import '../../assets/styles/components/services.sass'

export default function Services(props) {
    const { services } = props.data
    return (
        <div id="Services">
            <section>
                <h5 className="strong text-center">Delivery Services</h5>
                <h2 className="strong text-center mb-5">All Essentials You Need</h2>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-11 col-lg-9">
                        <div className="row">
                            {services.map((service, i) => (
                                <div key={i} className="col-sm-12 col-lg-4 mb-5 text-left">
                                    <div className="card">
                                        <img src={require(`../../assets/images/services/${service.img}`).default} className="card-img-top" alt={service.title} />
                                        <div className="card-body">
                                            <h5 className="card-title strong">{service.title}</h5>
                                            <p className="card-text">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

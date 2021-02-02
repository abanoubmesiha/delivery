import React from 'react'

export default function Services(props) {
    const { services } = props.data
    return (
        <div id="Services">
            <section>
                <h3 className="text-center">Delivery Services</h3>
                <h1 className="text-center">Delivery Services</h1>
                <div className="row mx-5">
                    {services.map((service, i) => (
                        <div key={i} className="col-sm-12 col-lg-4 mb-5 text-left">
                            <div className="card">
                                <img src={require(`../assets/images/services/${service.img}`).default} className="card-img-top" alt={service.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

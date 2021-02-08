import React from 'react'

export default function Testimonials(props) {
    const { partners } = props
    return (
        <div id="Partners" className="mb-5">
            <section>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-11 col-lg-9">
                        <div className="row">
                            {partners.map((partner, i) => (
                                <div key={i} className="col-sm-12 col-lg-3 mb-3 text-center">
                                    <img
                                        src={require(`../../assets/images/partners/${partner.img}`).default}
                                        alt={partner.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

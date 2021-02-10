import React from 'react'
import {AiFillStar} from 'react-icons/all'
import '../../assets/styles/components/testimonials.sass'

export default function Testimonials(props) {
    const { testimonials } = props
    return (
        <div id="Testimonials" className="mb-5">
            <section>
                <h5 className="strong text-center mb-3">Testimonials</h5>
                <h2 className="strong text-center mb-5">What Out Users Says</h2>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-11 col-lg-9">
                        <div className="row">
                            {testimonials.map((testimonial, i) => (
                                <div key={i} className="col-sm-12 col-lg-4 mb-3 text-left">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {Array(Math.round(testimonial.rating))
                                                    .fill(<AiFillStar />)
                                                    .map((icon, i)=><React.Fragment key={i}>{icon}</React.Fragment>)}
                                            </h5>
                                            <p className="card-text">{testimonial.description}</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <img src={require(`../../assets/images/testimonials/${testimonial.img}`).default} alt={testimonial.title} />
                                            </div>
                                            <div className="col">
                                                <h6 className="mb-0">{testimonial.name}</h6>
                                                <p>{testimonial.title}</p>
                                            </div>
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

import React, { useState } from 'react'

export default function Services() {
    const [services] = useState([
        {
            title: 'Food',
            imgPath: '',
        },
        {
            title: 'Grocery',
            imgPath: '',
        },
        {
            title: 'Furniture',
            imgPath: '',
        },
        {
            title: 'Medicine',
            imgPath: '',
        },
        {
            title: 'Electronics',
            imgPath: '',
        },
        {
            title: 'Clothes',
            imgPath: '',
        },
    ]);
    return (
        <div id="Services">
            <section className="text-center">
                <h3>Delivery Services</h3>
                <h1>Delivery Services</h1>
                <div className="row mx-5">
                    {services.map((service, i) => (
                        <div key={i} className="col-sm-12 col-lg-4 mb-5">
                            <div class="card">
                                <img src="./assets/images/services/food.svg" class="card-img-top" alt={service.title} />
                                <div class="card-body">
                                    <h5 class="card-title">{service.title}</h5>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

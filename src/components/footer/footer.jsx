import React from 'react'
import '../../assets/styles/components/footer.sass'

export default function Footer(props) {
    const { footer } = props;
    console.log(footer)
    return (
        <footer className="row">
            <div className="col">
                {/* <img src={require(`../../assets/images/${footer.leftImg}`).default} alt={footer.leftImg} /> */}
            </div>
        </footer>
    )
}

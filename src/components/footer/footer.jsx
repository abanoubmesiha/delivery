import React from 'react'
import { IoLogoGooglePlaystore, AiOutlineApple, BsChevronCompactUp } from 'react-icons/all'
import '../../assets/styles/components/footer.sass'

export default function Footer(props) {
    const { footer } = props;
    console.log(footer)
    return (
        <footer className="row">
            <div className="col bg-dark">
                <div className="row">
                    <div className="col-sm-12 col-lg-2">
                        <img src={require(`../../assets/images/footer/${footer.leftImg}`).default} alt={footer.leftImg} />
                    </div>
                    <div className="col-sm-12 col-lg-2 d-flex align-items-center">
                        <img src={require(`../../assets/images/footer/${footer.logo}`).default} alt={footer.logo} />
                        <div className="row">
                            <div className="col ticket">
                                <div className="row">
                                    <div className="col-3 d-flex align-items-center">
                                        <AiOutlineApple size={30} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

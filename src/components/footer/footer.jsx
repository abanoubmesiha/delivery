import React from 'react'
import { IoLogoGooglePlaystore, AiOutlineApple, BsChevronCompactUp } from 'react-icons/all'
import '../../assets/styles/components/footer.sass'

export default function Footer(props) {
    const { footer } = props;
    return (
        <footer id="Footer" className="row bg-dark delivery-man">
            <div className="col-sm-11 col-lg-auto logo-section">
                <div className="row mt-5 mb-2">
                    <div className="col logo">
                        <img
                            src={require(`../../assets/images/footer/${footer.logo}`).default}
                            alt={footer.logo}
                            style={{width: '5rem'}}
                            />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col ticket">
                        <div className="row">
                            <div className="col-auto d-flex align-items-center px-1">
                                <AiOutlineApple color="white" size={25} />
                            </div>
                            <div className="col d-flex align-items-center">
                                <div>
                                    <label className="weak">Downloaded on the</label>
                                    <h6>App Store</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col ticket">
                        <div className="row">
                            <div className="col-auto d-flex align-items-center px-1">
                                <IoLogoGooglePlaystore color="white" size={25} />
                            </div>
                            <div className="col d-flex align-items-center">
                                <div>
                                    <label className="weak">GET IT ON</label>
                                    <h6>Play Store</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </footer>
    )
}

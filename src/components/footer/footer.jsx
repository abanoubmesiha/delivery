import React from 'react'
import { RiGooglePlayLine, AiOutlineApple } from 'react-icons/all'
import '../../assets/styles/components/footer.sass'

export default function Footer(props) {
    const { footer } = props;
    return (
        <footer id="Footer" className="row bg-dark delivery-man">
            <div className="col-sm-12 col-lg-auto logo-section">
                <div className="row mb-2">
                    <div className="col">
                        <img
                            src={require(`../../assets/images/footer/${footer.logo}`).default}
                            alt={footer.logo}
                            style={{width: '6rem'}}
                            />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col ticket">
                        <div className="row">
                            <div className="col-auto d-flex align-items-center ps-3 pe-0">
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
                <div className="row">
                    <div className="col ticket">
                        <div className="row">
                            <div className="col-auto d-flex align-items-center ps-3 pe-0">
                                <RiGooglePlayLine color="white" size={25} />
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

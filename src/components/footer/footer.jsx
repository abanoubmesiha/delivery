import React from 'react'
import { RiGooglePlayLine, AiOutlineApple, MdKeyboardArrowUp } from 'react-icons/all'
import '../../assets/styles/components/footer.sass'

const Section = (header, data, className) => (
    <div className={"col-md-12 col-lg-2 mb-3 " + className}>
        <div className="row">
            <div className="col">
                <h4>{header}</h4>
            </div>
        </div>
        {data.map((link, i)=>(
            <div key={i} className="row">
                <div className="col">
                    <a className="weak" style={{fontSize: "0.8rem"}} href={link.href}>{link.label}</a>
                </div>
            </div>
        ))}
    </div>
)

export default function Footer(props) {
    const { footer } = props;
    return (
        <footer id="Footer" className="row bg-dark images d-flex align-items-center">
            <div className="col-sm-12 col-lg-auto logo-section mb-3">
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
            {Section("About Us", footer.aboutUsLinks, "offset-lg-1")}
            {Section("About", footer.aboutLinks)}
            {Section("Support", footer.supportLinks)}
            <a href="/#" className="red-square">
                <MdKeyboardArrowUp color="white" size={30} />
            </a>
        </footer>
    )
}

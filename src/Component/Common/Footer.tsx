import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
        <div className='row footer-head-padding'>
            <div className="col-md-1"></div>

            <div className="col-md-10">
                <div className="row">

                    <div className="col-md-4">
                        <div className='footer-left-section'>
                            <img src="assets/image/BinaryGrove-logo.png" alt="" className='footer-left-section-logo'/>
                            <p className='footer-left-section-text'>
                                <span >
                                    <strong>BINARYGROVE OY</strong> is a software development company based in Finland. Work worldwide qualityful products with any types of Web applications. Team is prepared with some highly efficient consultant, Developers designers.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='footer-mid-section'>
                            <h3>About us</h3>
                            <div className='footer-mid-section-text'>
                                <p><a href="#">Why BinaryGrove OY?</a></p>
                                <p><a href="#">Our Team</a></p>
                                <p><a href="#">Career</a></p>
                                <p><a href="#">Contact Us</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='footer-right-section'>
                            <h3>Follow US</h3>
                            <div className='footer-right-section-icon'>
                                <a href="https://www.facebook.com/people/Binary-Grove-OY/100094464025165"><i className="fa fa-facebook icon-css"></i></a>
                                <a href="#"><i className="fa fa-twitter icon-css" ></i></a>
                                <a href="https://www.linkedin.com/company/binarygrove-oy"><i className="fa fa-linkedin icon-css"></i></a>
                                <a href="#"><i className="fa fa-instagram icon-css"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
        <div className="row footer-bottom">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className='footer-bottom-text'>
                    <p>
                        <span>© 2023 <a href="#" className="footer-bottom-text-logo">BinaryGrove OY </a></span>
                        <span>| All right reserved </span>
                    </p>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    </footer>
  )
}

export default Footer
import React from 'react'


function Header() {
  return (
    <header className='header'>
        <div className='row'>
            <div className="col-md-1"></div>

            <div className="col-md-10">
                <div className="row">

                    <div className="col-md-4">
                        <div className='header-logo'>
                            <img src="assets/image/BinaryGrove-logo.png" alt="" className='logo'/>
                        </div>
                    </div>

                    <div className="col-md-8 main-manu">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">OUR SERVICE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">OUR WORK</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT US</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    </header>
  )
}

export default Header
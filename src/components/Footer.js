import LogoColored from '../assets/imgs//logos/logo-color.png'
import NavbarList from './NavbarList'

const Footer = () => {
    return (
        <div id="contact" className="container-fluid">
            <div className="container">
                <div className="px-4 py-5 my-5 text-center">
                    <img src={LogoColored} alt="Oqulo Logo"/>
                    <nav className="navbar navbar-expand-lg navbar-light rounded pt-5">
                        <div className="container-fluid">
                            <div className="navbar-collapse justify-content-md-center">
                                <NavbarList ulClass="navbar-nav"/>
                            </div>
                        </div>
                    </nav>
                    <p className="pt-5">Copyright © Oqulo 2018. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

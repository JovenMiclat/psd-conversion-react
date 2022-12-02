import BookingApp from "../assets/imgs/phone.png"
import Navbar from "./Navbar"
import Form from "./Form"

const Header = () => {
    return (
        <div className="container-fluid bggradient overflow-hidden p-0">
            <Navbar />
            <div className="container">
                <div className="row text-white vheader">
                    <div className="col-lg-6 order-0 order-sm-0 order-md-0 order-lg-1 order-xl-1 order-xxl-1 p-3 p-lg-5 pt-lg-5">
                        <h3 className="fw-bold">The Only Platform You'll Need to Run Smart Coworking Spaces & Serviced Offices</h3><br/>
                        <p>Oqulo is built to sell, manage and grow your commercial real estate business.
                                        Collect payments, manage clients and run reports using our booking app. 
                                        Engage members using our community messaging feature.<br/><br/>
                                        Be the first in line to take Oqulo for a test drive!</p>
                        <Form formClass="row g-2" inputClass="col-sm-12 col-md-8" btnClass="col-auto col-md-4" emailValue="Email" btnValue="NOTIFY ME!"/>
                        <p className="opacity-50">*No spam, that's a promise.</p>
                    </div>
                    <div className="col-lg-6 order-1 order-sm-1 order-md-1 order-lg-0 order-xl-0 order-xxl-0 p-0 overflow-hidden d-flex justify-content-center phone">
                        <img className="img-fluid" src={BookingApp} alt="Booking App"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

import WorkplaceImg from '../assets/imgs/content1.png'

const Section1 = () => {
    return (
        <div id="discover" className="container-fluid">
            <div className="container py-5">
                <div className="row align-items-center pt-5">
                    <div className="col-lg-6 col-md-12 order-">
                        <h1 className="display-6 fw-bold mb-3">Tried & Tested Space Management Software</h1><br/>
                        <div>
                            <p>Oqulo is a homegrown app that’s been tested by real-life businesses. Whether you operate on a single building or in multiple locations, Oqulo is designed to make your space leasing operations hassle-free. </p>
                            <br/>
                            <p>Your clients will have a smooth booking & online payment experience, and your concierge staff will be able to view occupancy stats and generate reports at a click of a button.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 text-center">
                        <img src={WorkplaceImg} className="img-fluid" alt="Phone Workplace"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1

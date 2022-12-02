import Form from "./Form"

const Section4 = () => {
    return (
        <div className="container-fluid bggradient bggradient2 p-0">
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="fw-light pt-5">Launching Soon</h1>
                <div className="col-lg-6 mx-auto pb-5">
                    <p className="mb-4">Sign up to get updates on Oqulo's public release.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Form formClass="row g-4" inputClass="col-sm-7 col-md-7 order-sm-1 order-md-1" btnClass="col-sm-5 col-md-5 order-sm-2 order-md-2" emailValue="Email Address" btnValue="TRY THE BETA!"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4

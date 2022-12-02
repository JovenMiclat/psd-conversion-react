import SmartphoneTouch from "../assets/imgs/smartphone-touch.png";
import SmartphoneHand from "../assets/imgs/smartphone-hand.png";
import SmartphoneApp from "../assets/imgs/smartphone-app.png";
import SmartphoneLock from "../assets/imgs/smartphone-lock.png";
import AppInvoice from "../assets/imgs/phone-app.png";
import FlexContent from "./FlexContent";

const Section2 = () => {
  return (
    <div id="features" className="container-fluid bgblue p-0 overflow-visible">
      <div className="px-4 py-5 my-5 text-center">
        <h2 className="fw-bold pt-5">Oqulo Features at a Glance</h2>
        <p>Powerful functionalities that changes the way you do business.</p>
        <div className="container">
          <div className="d-lg-flex p-0 justify-content-center">
            <div className="container order-0 order-sm-0 order-md-0 order-lg-0 order-xl-0 order-xxl-0">
              <FlexContent
                firstDiv="col-9 p-0 order-1 order-sm-1 order-md-1 order-lg-0 order-xl-0 order-xxl-0"
                title="Powerful Space Management"
                titleClass="text-start text-sm-start text-md-start text-lg-end text-xl-end text-xxl-end"
                desc="Manage meeting room and desk bookings, create events, sell tickets, schedule private office showings, automate invoicing and connect with members --- all in one central dashboard."
                descClass="text-start text-sm-start text-md-start text-lg-end text-xl-end text-xxl-end"
                secondDiv="col-3 p-0 order-0 order-sm-0 order-md-0 order-lg-1 order-xl-1 order-xxl-1"
                imgSrc={SmartphoneTouch}
              />
              <FlexContent
                firstDiv="col-9 p-0 order-1 order-sm-1 order-md-1 order-lg-0 order-xl-0 order-xxl-0"
                title="Painless Integration"
                titleClass="text-start text-sm-start text-md-start text-lg-end text-xl-end text-xxl-end"
                desc="No matter what your website is built on, Oqulo is easy to setup and integrate with CRM and payment gateways. Go live in a matter of days."
                descClass="text-start text-sm-start text-md-start text-lg-end text-xl-end text-xxl-end"
                secondDiv="col-3 p-0 order-0 order-sm-0 order-md-0 order-lg-1 order-xl-1 order-xxl-1"
                imgSrc={SmartphoneHand}
              />
            </div>
            <div className="container order-1 order-sm-2 order-md-2 order-lg-2 order-xl-2 order-xxl-2">
              <FlexContent
                firstDiv="col-9 p-0 order-1 order-sm-1 order-md-1 order-lg-1 order-xl-1 order-xxl-1"
                title="User-Friendly Interface"
                titleClass="text-start text-sm-start text-md-start text-lg-start text-xl-start text-xxl-start"
                desc="Clients will find it easy to book and pay for their space, thanks to Oqulo’s easy navigation and pixel-perfect design. Keep members up to date with Oqulo’s community board and help desk features."
                descClass="text-start text-sm-start text-md-start text-lg-start text-xl-start text-xxl-start"
                secondDiv="col-3 p-0 order-0 order-sm-0 order-md-0 order-lg-0 order-xl-0 order-xxl-0"
                imgSrc={SmartphoneApp}
              />
              <FlexContent
                firstDiv="col-9 p-0 order-1 order-sm-1 order-md-1 order-lg-1 order-xl-1 order-xxl-1"
                title="Secure Data & White Label Branding"
                titleClass="text-start text-sm-start text-md-start text-lg-start text-xl-start text-xxl-start"
                desc="Get peace of mind in knowing that client information and sales data are stored in a secure server. Our white label service allows you to market this platform as your own."
                descClass="text-start text-sm-start text-md-start text-lg-start text-xl-start text-xxl-start"
                secondDiv="col-3 p-0 order-0 order-sm-0 order-md-0 order-lg-0 order-xl-0 order-xxl-0"
                imgSrc={SmartphoneLock}
              />
            </div>
            <div className="container ps-0 pe-0 order-2 order-sm-1 order-md-1 order-lg-1 order-xl-1 order-xxl-1 overflow-visible d-flex justify-content-center pt-4">
              <img
                className="img-fluid"
                src={AppInvoice}
                alt="Upload Invoice"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

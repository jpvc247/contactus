import { Button } from "react-bootstrap";
import { useState } from "react";

function ContactForm() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <h1>Contact Us</h1>
      <form>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <label className="form-label">
              First Name<span>*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label className="form-label">
              Last Name<span>*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="col-12 mb-3">
          <label className="form-label">
            Email Address<span>*</span>
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12">
          <label className="form-label">
            Query Type<span>*</span>
          </label>
        </div>

        <div className="row">
          {/* First Input with Radio */}
          <div className="col-12 col-md-6 mb-3 position-relative">
            <div className="position-relative">
              <input
                type="text"
                className="form-control ps-5" // Left padding for radio button
                disabled
                placeholder="General Enquiry"
              />
              <div className="position-absolute start-0 top-50 translate-middle-y d-flex align-items-center ps-3" style={{ height: "100%" }}>
                <input
                  type="radio"
                  name="query"
                  checked={selected === "General Enquiry"}
                  onChange={() => setSelected("General Enquiry")}
                  className="form-check-input"
                  style={{ width: "1.2rem", height: "1.2rem" }} // Adjusted size
                />
              </div>
            </div>
          </div>

          {/* Second Input with Radio */}
          <div className="col-12 col-md-6 position-relative">
            <div className="position-relative">
              <input
                type="text"
                className="form-control ps-5"
                disabled
                placeholder="Support Request"
              />
              <div className="position-absolute start-0 top-50 translate-middle-y d-flex align-items-center ps-3" style={{ height: "100%" }}>
                <input
                  type="radio"
                  name="query"
                  checked={selected === "Support Request"}
                  onChange={() => setSelected("Support Request")}
                  className="form-check-input"
                  style={{ width: "1.2rem", height: "1.2rem" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mb-2">
          <label className="form-label">
            Message<span>*</span>
          </label>
          <textarea className="form-control no-resize"></textarea>
        </div>

        <div className="d-flex align-items-center">
          <div className="me-2">
            <input type="checkbox" />
          </div>
          <div className="me-2 mt-3">
          <p>
            I consent to being contacted by the team<span>*</span>
          </p>
          </div>
          
          
        </div>

        <div className="col-12">
          <Button variant="success" className="w-100">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;

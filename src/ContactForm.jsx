import {Button} from 'react-bootstrap'

function ContactForm(){
    return(<>
        <h1>Contact Us</h1>
        <form>
            <div className="column-wrapper">
            <div className="column-wrapper-item col-sm-6">
                <label className="form-label">First Name<span>*</span></label><br />
                <input type="text" className="form-control" />
            </div>
            <div className="column-wrapper-item col-sm-6">
                <label className="form-label">Last Name<span>*</span></label><br />
                <input type="text" className="form-control"/>
            </div>
            </div><br />
            <div className="column-wrapper-item">
                <label className="form-label">Email Address<span>*</span></label><br />
                <input type="text" className="form-control"/>
            </div><br />


          <div>
            <label className="form-label">Query Type<span>*</span></label><br />
          </div>

            <div className="column-wrapper" >
              <div className="column-wrapper-item col-sm-6">
              <input type="text" className="form-control" />
                </div> 
                <div className="column-wrapper-item col-sm-6">
              <input type="text" className="form-control" />
                </div>  
                
            </div><br />

            <div className="column-wrapper-item">
            <label className="form-label">Message<span>*</span></label><br />
                <textarea className="form-control"></textarea>
            </div><br />
            <div className="column-wrapper">
                <div className="column-wrapper-item">
                <input type="checkbox" />
                </div>

                <div className="column-wrapper-item">
                    <p>I concent to being contacted by the team<span>*</span></p>
                </div>
            </div>
            <div className="button-wrapper">
                <Button variant="success" className="col-12">Submit</Button>
            </div>
            
        </form>
    </>);
}

export default ContactForm;
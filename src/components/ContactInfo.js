import React, {Component} from 'react';
import "./ContactInfo.css"

class ContactInfo extends Component{
    render(){
        return(
            <div className="address__container" >
                <h4>Where To Find Us</h4>
                <p className="address">
                    House No. xyz, Something Nagar,
                    <br/>
                    #City, #State #Pincode
                    <br/>
                    9101962439 
                </p>
            </div>
        )
    }
};

export default ContactInfo;

import React, {Component} from 'react';
import "./Customise.css";


class Customise extends Component {
    constructor(props){
        super(props);
        this.state={
            message:""
        };
        this.handleChange=this.handleChange.bind(this);
    }
    
    handleChange(event){
         let value = event.target.value;
         this.setState({message:value});
    };

    render(){
        return(
            <div className="customise__container">
                <div className="customise__title">
                    <h2>Customise Your Service</h2>
                    <div id="bar"></div>
                </div>
                <form className="customise__form" >
                   <textarea
                      onChange={this.handleChange}
                      row="80"
                      value={this.state.message}
                      type="text"
                      name="message"
                      placeholder="You can Customize your Service. Input Your preferences."
                      className="customise__message"
                   /> 
                </form> 
            </div>
        )}
};

export default Customise;
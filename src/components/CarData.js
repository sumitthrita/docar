import React, {Component} from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import './CarData.css';
import Cars from './CarDetails';


class CarData extends Component {
    constructor(props){
        super(props);
        this.state={
            brand:"",
            brandName:"",
            modelSelected:""
        };
        this.handleClickBrand=this.handleClickBrand.bind(this);
        this.handleClickModel=this.handleClickModel.bind(this);
        this.Brand=this.Brand.bind(this);
        this.Model=this.Model.bind(this);
        
    }

    Brand () {
        return Cars.map(car=>{
            let title =car.title;
            let id2 = car.id;
            return (
                <Dropdown.Item onClick={this.handleClickBrand} id={id2}  name={title} >{title} </Dropdown.Item>
            );
        })
    }

    Model () {
        return Cars.map( car => {
            let modelname=this.state.brandName;
            let id2=car.id;
            let modelList=car.[modelname];

            if(modelname===id2){
                return (
                    modelList.map(model=>{
                         let modelItem=model.model;
                        return (
                        <Dropdown.Item  onClick={this.handleClickModel} name={modelItem}> {modelItem} </Dropdown.Item>
                        );
                    })
                )
            }
        })
        
     }
    
    handleClickBrand(event){
        let name=event.target.name;
        let id=event.target.id; 
        this.setState({brand:name,brandName:id});  
    }
    handleClickModel(event){
        let value=event.target.name;
        this.setState({modelSelected:value});
    }
    render(){
         return (
        <div>
           <div className="carData__container">
                <div className="carData__BrandDropdown">
                    <DropdownButton 
                        id="dropdown-basic-button" 
                        drop="right" 
                        title="Car Brand"
                        variant="danger"
                        size="lg"
                    >
                    <div className="dropdown__content">  {this.Brand()} </div>
                    </DropdownButton>
                    <input type="text" placeholder="Selected Brand" className="carData__BrandInput" value={this.state.brand} />
                </div>
                <div className="carData__ModelDropdown">
                    <DropdownButton 
                        id="dropdown-basic-button" 
                        drop="right" 
                        title="Model"
                        variant="danger"
                        size="lg"
                        disabled ={this.state.brandName.length===0}
                    >
                    <div className="dropdown__content"> {this.Model()}</div>  
                    </DropdownButton>
                    <input type="text" placeholder="Selected Model" className="carData__ModelInput" value={this.state.modelSelected} />
                </div>
           </div>
        </div>
    )};
};
export default CarData;
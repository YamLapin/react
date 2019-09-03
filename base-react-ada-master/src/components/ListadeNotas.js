import React, { Component } from "react";
import App from "../App";

class ListadeNotas extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
 
 
    
 
    render() {
    
        return (
       
                <div>
                   {
                       this.props.mostrarNota === true ? this.props.notas.map(n => <div> {n}</div>)
                       : ''
                   }
                </div>
          
        )
    }
 }
 
 export default ListadeNotas;
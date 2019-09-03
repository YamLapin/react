import React, { Component } from "react";
import App from "../App";
import ListadeNotas from "./ListadeNotas"

class Main extends Component {
   constructor(props) {
       super(props)
       this.state = {
           mostrarNota: false ,
            titulo: "mis notas",
            notas: [],
       }
   }

   componentDidMount() {
       console.log("Holas")
   }

   agregar = () => {
      const notasNuevas = [...this.state.notas]
      notasNuevas.push(this.state.nota)
      this.setState({
          notas: notasNuevas,
          mostrarNota: true,
          nota: ''
      })

   }

   handleChange = e => {
      
       this.setState({ 
        
          nota: e.target.value
       })
   }

   render() {
       console.log(this.state)
       return (
           <div> 
               <h1>{this.state.titulo}</h1>
               <textarea 
               value = {this.state.nota}
               onChange = {this.handleChange}> </textarea>
               <button onClick = {this.agregar}>Agregar</button>
             <ListadeNotas
             mostrarNota={this.state.mostrarNota}
             notas= {this.state.notas}
             ></ListadeNotas>
           </div>
       )
   }
}

export default Main;
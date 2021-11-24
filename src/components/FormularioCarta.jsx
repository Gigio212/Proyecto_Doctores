import React, { useState } from 'react';


function FormularioCarta(){
    //inicialización
    const [state,setState]=useState({
        Nombre:"",
        Edad:'',
        Nacimiento:'',
        Enfermedad:'',
        Descripcion:''
    })



    //render
    console.log(state)
    return(
        <div className="card">
                <form className="card-body" onSubmit={(e)=>e.preventDefault()}>
                    <input type="text" onChange={(e)=>setState({...state,descripcion:e.target.value})} name="descripcion" className="form-control"/>
                    <input type="text" onChange={(e)=>setState({...state,valor:e.target.value})} name="valor" className="form-control"/>
                    <button type="submit" className="btn btn-primary">Pedir carta</button>
                </form> 
        </div>
    )
}


export default FormularioCarta
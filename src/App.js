import React/*{useState,useEffect} */from "react";
import {Routes,Route,Link,Outlet} from 'react-router-dom';
import axios from 'axios';


function Encabezado(){
  return(
    <header>
      Bienvenidos al registro de pacientes
      <nav className="nav">
        <span className="nav-link"><Link to="/">Registro</Link></span>       
      </nav>      
    </header>
  )
}

class Home extends React.Component{
  constructor(){
    super()
    this.state={
      info:null
    }
  }
  async comunica(){
    //Consumiendo el servicio POST  
    const respuesta = await fetch('http://localhost:8080/paciente',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          info: this.state/*{
            nombre:"",
            edad:"",
            descripcion:"",
            nacimiento:"",
            enfermedad:""
          }*/
        })
      })
    
      //Imprimir lo que responde el servidor
      const data = await respuesta.json()
      console.log(data)
  }

  handleInput=(e)=>{
    const {value,name}=e.target;
    this.setState({
        [name]:value
    });
}

handleSubmit=(e)=>{
    e.preventDefault()
    this.props.onAgregarPaciente(this.state)
    console.log(this.state)
}

componentDidMount(){
  axios.get("http://127.0.0.1:8080/pacientes")
    .then(result=>{
      console.log(result)
      this.setState(result.data);
    })
}

agregarPaciente(info){
  this.setState({
    cartas:[...this.state.cartas,info]
  })
}

  render(){
  return(
    <div>  
      <div className="paciente">
        <form  className="paciente-body" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-control">
                            <label className="form-label">Nombre Completo</label>
                            <input type="text" className="form-control" placeholder="Colocar Nombre" id="Nombre" name="Nombre"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-control">
                            <label className="form-control" for="edad">Colocar Edad</label>
                            <input type="text" className="form-control" placeholder="Colocar tu edad" id="Edad" name="Edad"></input>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-control">
                            <label className="form-control" for="Lugar de Nacimiento">Lugar de Nacimiento</label>
                            <input type="text" className="form-control" placeholder="Lugar de Nacimiento" id="Nacimiento" name="Nacimiento"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-control">
                            <label className="form-control" for="Enfermedad">Enfermedad</label>
                            <input type="text" className="form-control" placeholder="Colocar Enfermedad" id="Enfermedad" name="Enfermedad"></input>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-control">
                            <label className="form-control" for="Descripcion">Descripcion</label>
                            <input type="text" className="form-control" placeholder="Colocar Descripcion" id="Descripcion" name="Descripcion"></input>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                            <div className="row">
                                <div className="col -6">
                                    <input type="reset" class="btn btn-primary"></input>
                                </div>
                                <div className="col -6">
                                    <button type="submit" className="nav-link"><Link to="/Doctores">Enviar</Link></button>
                                </div>
            
                            </div>
                        
                    </div>  
                </div>
      </form> 
    </div>
    <Outlet/>
    </div>
  )
  }
}



class Doctores extends React.Component{
  constructor(){
    super()
    this.state={
      info:null
    }
  }

  

  render(){
    return(
      <div>
            <div className="row">
                  <div className="col-lg-6">
                      <div className="form-control">
                          <label className="form-label">Doctor 1</label>
                          <button className="nav-link"><Link to="/Doc1Pacientes">Seleccionar</Link></button>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="form-control">
                      <label className="form-label">Doctor 4</label>
                      <button className="nav-link"><Link to="/Doc4Pacientes">Seleccionar</Link></button>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-6">
                      <div className="form-control">
                          <label className="form-label">Doctor 2</label>
                          <button className="nav-link"><Link to="/Doc2Pacientes">Seleccionar</Link></button>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="form-control">
                      <label className="form-label">Doctor 5</label>
                      <button className="nav-link"><Link to="/Doc5Pacientes">Seleccionar</Link></button>
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-lg-6">
                      <div className="form-control">
                          <label className="form-label">Doctor 3</label>
                          <button className="nav-link"><Link to="/Doc3Pacientes">Seleccionar</Link></button>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="form-control">
                        <label className="form-label">Doctor 6</label>
                        <button className="nav-link"><Link to="/Doc6Pacientes">Seleccionar</Link></button>
                      </div>
                  </div>
              </div> 
      </div>
    )
  }
}

function Doc1Pacientes(){
  return(
    <div>
      <h1>Pacientes del Doctor Jaime</h1>
    </div>
  )
}


function Doc2Pacientes(){
  return(
    <div>
     <h1>Pacientes del Doctor Rodrigo</h1>
    </div>
  )
}


function Doc3Pacientes(){
  return(
    <div>
      <h1>Pacientes del Doctor Roberto</h1>
    </div>
  )
}


function Doc4Pacientes(){
  return(
    <div>
      <h1>Pacientes de la Doctora Sofía</h1>
    </div>
  )
}


function Doc5Pacientes(){
  return(
    <div>
      <h1>Pacientes de la Doctora Ana</h1>
    </div>
  )
}


function Doc6Pacientes(){
  return(
    <div>
      <h1>Pacientes de la Doctora Andrea</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <Encabezado/>
        <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/Doctores" element={<Doctores/>}/>
            <Route path="/Doc1Pacientes" element={<Doc1Pacientes/>}/>
            <Route path="/Doc2Pacientes" element={<Doc2Pacientes/>}/>
            <Route path="/Doc3Pacientes" element={<Doc3Pacientes/>}/>
            <Route path="/Doc4Pacientes" element={<Doc4Pacientes/>}/>
            <Route path="/Doc5Pacientes" element={<Doc5Pacientes/>}/>
            <Route path="/Doc6Pacientes" element={<Doc6Pacientes/>}/>
        </Routes>
    </div>
  );
}



export default App;

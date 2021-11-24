import React,{useState,useEffect} from "react";
import {Routes,Route,Link,Outlet} from 'react-router-dom';


function Encabezado(){
  return(
    <header>
      <nav className="nav">
        <span className="nav-link"><Link to="/">Registro</Link></span>       
      </nav>      
    </header>
  )
}

function Home(){
  return(
    <div>  
      <div className="paciente">
        <form>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-control">
                            <label class="form-label">Nombre Completo</label>
                            <input type="text" class="form-control" placeholder="Colocar Nombre" id="Nombre" name="Nombre"></input>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-control">
                            <label class="form-control" for="edad">Colocar Edad</label>
                            <input type="text" class="form-control" placeholder="Colocar tu edad" id="Edad" name="Edad"></input>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-control">
                            <label class="form-control" for="Lugar de Nacimiento">Lugar de Nacimiento</label>
                            <input type="text" class="form-control" placeholder="Lugar de Nacimiento" id="Nacimiento" name="Nacimiento"></input>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-control">
                            <label class="form-control" for="Enfermedad">Enfermedad</label>
                            <input type="text" class="form-control" placeholder="Colocar Enfermedad" id="Enfermedad" name="Enfermedad"></input>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-control">
                            <label class="form-control" for="Descripcion">Descripcion</label>
                            <input type="text" class="form-control" placeholder="Colocar Descripcion" id="Descripcion" name="Descripcion"></input>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                            <div class="row">
                                <div class="col -6">
                                    <input type="reset" class="btn btn-primary"></input>
                                </div>
                                <div class="col -6">
                                    <input type="submit" ></input>
                                    <button className="nav-link"><Link to="/Doctores">Continuar</Link></button>
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



class Doctores extends React.Component{
  constructor(){
    super()
    this.state={
      info:null
    }
  }

  componentDidMount(){
    fetch('http://localhost:8080/pacientes')
      .then(res=>res.json())
        .then(datos=>{
          console.log(datos)
          this.setState({
            info:datos
          })
        })
        .catch(err=>{
          console.log("Servidor desconectado")
          console.log(err)
        })
  }

  componentDidUpdate(){
    console.log("Componente actualizado")
  }
  
  async comunica(info){
    //Consumiendo el servicio POST  
    const respuesta = await fetch('http://localhost:8080/paciente',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          mensaje:"Enviando JSON"
        })
      })
    
      //Imprimir lo que responde el servidor
      const data = await respuesta.json()
      console.log(data)
  }

  render(){
    console.log(this.state)
    return(
      <div>
            <div class="row">
                  <div class="col-lg-6">
                      <div class="form-control">
                          <label class="form-label">Doctor 1</label>
                          <button className="nav-link"><Link to="/Doc1Pacientes">Seleccionar</Link></button>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="form-control">
                      <label class="form-label">Doctor 4</label>
                      <button className="nav-link"><Link to="/Doc4Pacientes">Seleccionar</Link></button>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-6">
                      <div class="form-control">
                          <label class="form-label">Doctor 2</label>
                          <button className="nav-link"><Link to="/Doc2Pacientes">Seleccionar</Link></button>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="form-control">
                      <label class="form-label">Doctor 5</label>
                      <button className="nav-link"><Link to="/Doc5Pacientes">Seleccionar</Link></button>
                      </div>
                  </div>
              </div>

              <div class="row">
                  <div class="col-lg-6">
                      <div class="form-control">
                          <label class="form-label">Doctor 3</label>
                          <button className="nav-link"><Link to="/Doc3Pacientes">Seleccionar</Link></button>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="form-control">
                        <label class="form-label">Doctor 6</label>
                        <button className="nav-link"><Link to="/Doc6Pacientes">Seleccionar</Link></button>
                      </div>
                  </div>
              </div> 
      <button type ="button" onClick={this.comunica(this.state)} className="btn btn-primary">Consume Post</button>
      </div>
    )
  }
}

function Doc1Pacientes(){
  return(
    <div>
      Pacientes del Jaime
    </div>
  )
}


function Doc2Pacientes(){
  return(
    <div>
            Pacientes del Rodrigo
    </div>
  )
}


function Doc3Pacientes(){
  return(
    <div>
            Pacientes del Roberto
    </div>
  )
}


function Doc4Pacientes(){
  return(
    <div>
            Pacientes del Sofia
    </div>
  )
}


function Doc5Pacientes(){
  return(
    <div>
            Pacientes del Ana
    </div>
  )
}


function Doc6Pacientes(){
  return(
    <div>
            Pacientes del Andrea
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

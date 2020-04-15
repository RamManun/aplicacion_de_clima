import React, {Component} from 'react';
import Header from './Header'
import Form from './Form'
import Error from './Error'
import Resultado from './Resultado'

class App extends Component {

  state = {
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidMount(){
    this.setState({
      error: false
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.consulta !== this.state.consulta){
      this.consultarApi();
    }  
  }

  consultarApi = () => {
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null;
    
    //Leer la url y agregar el api key
    const appId = 'cd4040436352401a206397c53454df82'
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    
    //query con fetch api
    fetch(url)
      .then(respuesta =>{
        return respuesta.json()
      })
      .then(datos =>{
          this.setState({
            resultado: datos
          })
      })
      .catch(error => {
        console.log(error)
      })
    
    //consultar con fetch
  }

  datosConsulta = respuesta => {
      if(respuesta.ciudad === '' && respuesta.pais === ''){
          this.setState({
            error:true
          })
      }else{
        this.setState({
          consulta: respuesta,
          error: false
        })
      }
  }

  render(){

    const error =this.state.error
    let resultado;
    if(error){
      resultado =<Error 
      mensaje="Ambos campos son obliatorios"/>
    } else{
      resultado = <Resultado 
      resultado = {this.state.resultado}/>
    }

    return (
      <div>
        <Header
          titulo='Clima React'
        />
        <Form
          datosConsulta ={this.datosConsulta}
        />
        {resultado}
      </div>
    );
  }
}

export default App;

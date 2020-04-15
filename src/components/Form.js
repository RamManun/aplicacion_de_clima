import React, { Component } from 'react';

class Form extends Component {

    ciudadRef= React.createRef();
        paisRef = React.createRef();

        handleSubmit =(e)=>{
            e.preventDefault();

            //Leer los refs y crear el objeto
            const respuesta = {
                ciudad: this.ciudadRef.current.value,
                pais: this.paisRef.current.value
            }

            //enviar los props
            this.props.datosConsulta(respuesta);

            //opcional resetear el form
        }

    render() {
        return ( 
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.ciudadRef} id="ciudad" type="text"/>
                                <label htmlFor="ciudad">Ciudad: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef}>
                                    <option value="" defailtValue>Elige un pais</option>
                                    <option value="AR">Argentina</option>
                                    <option value="HN">Honduras</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="MX">Mexico</option>
                                </select>
                                <label htmlFor="pais">pais: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" 
                                value="buscar..."/>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}

export default Form;
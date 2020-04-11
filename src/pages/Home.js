import React, {Component} from 'react'
import {Title} from '../componentes/Title'
import {FormSearch} from '../componentes/FormSearch'
import {MovieList} from '../componentes/MovieList'


export class Home extends Component {
    constructor(){
        super()
        this.state={
          results: [],
          usedSearch: false,
          total: 0,
        }
    }
    
    _handleResults = (results, total) => {
        
        this.setState({
          results, usedSearch: true, total
        })
    }
    
    _renderSearch = () => {
        return this.state.results.length>0 ?
            <MovieList results={this.state.results} total={this.state.total} />  :
            <div class="notification is-primary">
                    No hay Resultados
                </div>
            
    }

    componentDidMount(){
        document.title = "Buscador de Pelicula"
    }

    render () {
        return (
        <div>
            <Title>
                Buscador de Peliculas
            </Title>
            <br/>
            <div className="form-centrado">
                <FormSearch onResults={this._handleResults} />
            </div>
            {this.state.usedSearch ? this._renderSearch() : 
            
                <div className="notification is-primary">Empieza buscando en el formulario</div>
            }
            
        </div>
        )
    }
}
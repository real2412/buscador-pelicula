import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BackButtonHome } from '../componentes/BackButtonHome'

const API_KEY='xxxxxxxx'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {
        movie: {}
    }

    _fetchMovie (id) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(rsp=>rsp.json())
            .then(movie=>{
                console.log({movie})
                this.setState({movie})
            })
    }

    componentDidMount (){
        const {id} = this.props.match.params
        this._fetchMovie(id)
    }

    _goBack () {
        window.history.back()
    }

    render () {
        const { Title, Year, Poster, Actors, Director, imdbRating, Plot, Rated, Runtime} = this.state.movie
        return (
            <div className="has-text-light">
                <br/>
                <BackButtonHome/>
                <br/>
                <div className="columns">
                    <div className="column">
        <h1 className="title has-text-primary">{Title} <small>({Rated})</small></h1>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <img src={Poster} alt='texto' />
                    </div>
                    <div className="column" style={{textAlign:"justify"}}>
                        <p><strong className="has-text-light">Sinopsis: </strong>{Plot}</p>
                        <p><small><strong className="has-text-light">Actores: </strong>{Actors}</small></p>
                        <p><small><strong className="has-text-light">Director: </strong>{Director}</small></p>
                        <p><small><strong className="has-text-light">Año: </strong>{Year}</small></p>
                        <p><small><strong className="has-text-light">Duración: </strong>{Runtime}</small></p>
                        <p><small><strong className="has-text-light">Imdb Rating: </strong> {imdbRating}⭐</small></p>
                        
                    </div>
                </div>
            </div>
        )
    }
}
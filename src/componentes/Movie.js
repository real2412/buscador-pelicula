import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export class Movie extends Component {

    static propTypes = {
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string,
        id: PropTypes.string,
        type: PropTypes.string,
    }

    _handleOver = (e) => {
        const img = e.target.closest("figure").childNodes[0]
        const titulo = e.target.closest("figure").childNodes[1]
        titulo.classList.remove("is-hidden")
        titulo.animate([
            {
                opacity:0
            },
            {
                opacity:1
            }
        ],{
            duration: 600,
            easing: 'ease',
            fill: 'forwards'
        })
        img.animate([
            {
                transform: "scale(1)",
                filter:'blur(0px)'
            },
            {
                transform: "scale(1.16)",
                filter:'blur(3px)'
            }],
            {
                duration: 600,
                easing: 'ease',
                fill: 'forwards'
            }
        )
    }

    _handleLeave = (e) => {
        const img=e.target.closest("figure").childNodes[0]
        const titulo = e.target.closest("figure").childNodes[1]
        titulo.classList.add("is-hidden")
        titulo.animate([
            {
                opacity:1,
                
            },
            {
                opacity:0,
            }
        ],{
            duration: 600,
            easing: 'ease',
            fill: 'forwards'
        })
        
        img.animate([
            {
                transform: "scale(1.16)",
                filter:'blur(3px)'
            },
            {
                transform: "scale(1)",
                filter:'blur(0px)'
            }],
            {
                duration: 600,
                easing: 'ease',
                fill: 'forwards'
            }
        )
    }

    render(){
        const {title, year, poster, id, type} = this.props
        let tipo 
        switch(type){
            case "movie": tipo = "Película"; break;
            case "series": tipo = "Serie"; break;
            case "episode": tipo = "Episodio"; break;
            default: tipo = "Otro"; break;
        }

        return (
            <div className="has-background-dark" >
                <Link to={`/detail/${id}`} className="card cuadro-pelicula" >
                    <div className="card-image">
                        <figure className="image" style={{height:300}} onMouseOver={this._handleOver} onMouseLeave={this._handleLeave} >
                            <img src={poster} alt="Placeholder Poster" />
                            <div className="card-content pelicula is-hidden">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4 titulo has-text-white" >{title}</p>
                                        <p className="subtitle is-6 has-text-white">{tipo} - {year}</p>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>
                </Link>
            </div>
            
        )
    }
}
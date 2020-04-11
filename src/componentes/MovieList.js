import React, {Component} from 'react'
import {Movie} from './Movie'

const API_KEY='xxxxxxxx'

export class MovieList extends Component {
    constructor(props){
        super(props)
        this.state={
            movies: props.results,
            page: 1
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({movies: nextProps.results, page:1})
    }
    
    _handleClick = (e) => {
        const inputPelicula = document.querySelector(".input").value
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputPelicula}&page=${this.state.page+1}`)
            .then(rsp=>rsp.json())
            .then(results=>{
                const {Search=[]} = results 
                console.log(Search)
                const arrSearch=[]
                Search.forEach((x,i,arr)=>{
                    let indice = arrSearch.map((y)=>y.imdbID).indexOf(x.imdbID)
                    if(indice<0){
                        arrSearch.push(x)
                    }
                })
                this.setState({movies: this.state.movies.concat(arrSearch), page: this.state.page+1})
            })
    }

    render() {
        const {total} = this.props
        const limite=5
        let grupos=[]
        let grupo=[]
        this.state.movies.forEach((movie, indice, arr)=>{
            grupo.push(<div key={movie.imdbID} className="column is-one-fifth">
                            <Movie
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster}
                                id={movie.imdbID}
                                type={movie.Type}
                            />
                        </div>)
            if( (indice+1)%limite===0 || (indice+1)===arr.length ){
                grupos.push(grupo)
                grupo = []
            }
        })

        return (
            <div>
                {grupos.map((html,i)=>{
                    return (
                        <div key={i} className="section">
                            <div  className="columns">
                                {html}
                            </div>
                        </div>
                    )
                })}
                { total-10*(this.state.page-1) > 10 ? 
                <button className="button is-primary is-outlined" onClick={this._handleClick} >Ver más</button> : <div></div>}
            </div>
        )
    }
}
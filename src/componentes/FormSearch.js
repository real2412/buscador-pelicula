import React, {Component} from 'react'

const API_KEY='xxxxxxxx'

export class FormSearch extends Component {
    state = {
        inputPelicula: ''
    }

    _handleChange = (e) => {
        this.setState({
            inputPelicula: e.target.value
        })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const {inputPelicula}=this.state
        console.log(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputPelicula}`)
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputPelicula}`)
            .then(rsp=>rsp.json())
            .then(results=>{
                const {Search=[], totalResults} = results 
                console.log(Search)
                const arrSearch=[]
                Search.forEach((x,i,arr)=>{
                    let indice = arrSearch.map((y)=>y.imdbID).indexOf(x.imdbID)
                    if(indice<0){
                        arrSearch.push(x)
                    }
                })
                this.props.onResults(arrSearch,totalResults)
            })
    }

    render () {
        return (
            <form onSubmit={this._handleSubmit} style={{paddingBottom:20, fontSize:"4em"}}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" onChange={this._handleChange} type="text" placeholder="Buscar una pelicula..."/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Buscar
                        </button>
                    </div>
                </div>
            </form>
            
        )
    }
}
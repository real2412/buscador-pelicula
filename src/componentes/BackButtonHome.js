import React from 'react'
import {Link} from 'react-router-dom'

export const BackButtonHome = () =>{
    return (<div className="columns">
        <div className="column is-one-fifth">
            <Link className="button is-info" to="/">
               {"<"} Volver a Home
            </Link>
        </div>
    </div>)
}
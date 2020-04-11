import React from 'react'
import { BackButtonHome } from '../componentes/BackButtonHome'

export const NotFound = () => {
    return (<div className="section has-text-white">
        <BackButtonHome/>
        <h1>404</h1>
        <h4>Pagina no encontrada :(</h4>
    </div>)
}
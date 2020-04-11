import React from 'react'

export const Title = ({children, subtitulo=""}) => {
    return (<section className="hero is-primary is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  {children}
                </h1>
                <h2 className="subtitle">
                  {subtitulo}
                </h2>
              </div>
            </div>
          </section>)
}
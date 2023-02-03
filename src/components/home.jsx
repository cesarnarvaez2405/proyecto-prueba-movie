import React, { useEffect, useState } from 'react'
import { get } from '../utilities/httpClient'
import { MovieCard } from './movieCard'
import { MovieGrid } from './movieGrid'
import '../styles/style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { LoandingPage } from './loandingPage'
import { MovieDetalles } from './movieDetalles'

export const Home = () => {
    return (
        <>
            <Router>
                <Link to= "/">
                    <div className="container">
                        <div className="title">
                            <h1>Movie</h1>
                        </div>
                        <div className="ghost">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </Link>
                <Switch>
                    <Route path="/movies/:movieId">

                        <MovieDetalles/>

                    </Route>

                    <Route path="/">

                        <LoandingPage />

                    </Route>
                </Switch>
            </Router>
        </>
    )
}

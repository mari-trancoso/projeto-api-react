import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "../pages/Home/HomePage"
import PokedexPage from "../pages/Pokedex/PokedexPage"
import DetailsPage from "../pages/Details/DetailsPage"
import ErrorPage from "../pages/Error/ErrorPage"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/pokedex" element={<PokedexPage/>}/>
            <Route path="/detalhes" element={<DetailsPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
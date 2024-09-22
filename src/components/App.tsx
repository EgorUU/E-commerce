import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

// Pages

import Header from './pages/Header'

import Main from './pages/Main'

import Profile from './pages/Profile'

import Basket from './pages/Basket'

import Search from './pages/Search'

import SearchTitle from './pages/SearchTitle'

import MainProduct from './pages/MainProduct'

//



const App: FC = () => {
    return (
        <>
            <Routes>
                <Route element={<Header />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/search/:arg1/:arg2" element={<Search />} />
                    <Route path="/search-title/:title" element={<SearchTitle />} />
                    <Route path="/product/:id" element={<MainProduct />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
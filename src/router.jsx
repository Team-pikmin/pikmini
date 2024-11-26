import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Main from './pages/Main';
import Explanation from './pages/Explanation'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/explanation' element={<Explanation/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router

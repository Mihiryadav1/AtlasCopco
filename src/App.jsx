import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/admin'
import Header from './components/Header'
import Sidebar from './components/sidebar'
import Registered from './pages/register'
import Webcamviewer from './pages/webCamViewer'
import Demo from './pages/demo'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="h-screen bg-slate-200">
          <Header />
          <Sidebar />
          <Routes>
            <Route path='/' element={<Webcamviewer />} />
            <Route path='/registered' element={<Registered />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/demo' element={<Demo />} />
            {/* <Webcamviewer /> */}
          </Routes>
        </div>
      </BrowserRouter>
      {/* <div className="text-3xl bg-red-500">sxdasd</div> */}
    </>
  )
}

export default App
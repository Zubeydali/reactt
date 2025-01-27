
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

import Layout from './components/layout/Layout';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  

  return (
    <>
       <HelmetProvider>
       <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
    </Routes>
  </BrowserRouter>



       </HelmetProvider>
     
    </>
  )
}

export default App

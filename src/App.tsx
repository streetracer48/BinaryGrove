import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import Header from './Component/Common/Header'
import Footer from './Component/Common/Footer'
import Contain from './Component/Contain';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossOrigin="anonymous"
  />;
  <link  rel="stylesheet"
    href='./assets/css/Common.css' />
  
function App() {

  return (
    <>
      <Header />
      <Contain />
      <Footer />
    </>
  )
}

export default App

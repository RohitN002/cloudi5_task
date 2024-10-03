import React from 'react'
import Footer from './components/FooterComponent'

import HeaderComponent from './components/HeaderComponent'
import ServicesComponent from './components/ServicesComponent'
import FaqComponent from './components/FaqComponent'
import FormComponet from './components/FormComponet'

const App = () => {
  return (
    <div className=''>
      <HeaderComponent/>
      <ServicesComponent/>
      <FormComponet/>
      <FaqComponent/>
      <Footer/>
    </div>
  )
}

export default App



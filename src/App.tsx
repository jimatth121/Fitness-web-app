import { useState } from 'react'
import Navbar from '@/Scenes/navbar'
import { SelectedPage } from '@/shared/types'
import Home from '@/Scenes/home'
import Benefits from '@/Scenes/benefits'
 
function App() {
const [ selectedPage, setSelectedPage]= useState<SelectedPage>(SelectedPage.Home)
  return (
    <>
      <div className='app bg-gray-20'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />

      </div>
    </>
  )
}

export default App

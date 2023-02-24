import React from 'react'
import { Outlet } from 'react-router-dom'
import { SapaBanner } from './SapaBanner'
import { SapaContent } from './SapaContent'
import { SapaFooter } from './SapaFooter'
import { Sapaheart } from './Sapaheart'


const HomeSapa = () => {
  return (
    <div>
      <Sapaheart></Sapaheart>
      <SapaBanner></SapaBanner>
      <Outlet/>
       
     <SapaFooter></SapaFooter>
    
        
    </div>
  )
}

export default HomeSapa
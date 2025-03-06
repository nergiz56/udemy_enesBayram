import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './header/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card/Card.jsx" 
import { Card_Data } from "./Data.jsx";
function App() {
 

  return (
    <>
      <Header/>
      <Card 
      cardTitle= {Card_Data[0].cardTitle} 
      image={Card_Data[0].image} 
      description={Card_Data[0].description}
      />
      <Card 
       cardTitle= {Card_Data[1].cardTitle} 
      image={Card_Data[1].image} 
      description={Card_Data[1].description}
      />
      <Card 
       cardTitle= {Card_Data[2].cardTitle} 
      image={Card_Data[2].image} 
      description={Card_Data[2].description}
      />
      <Card 
       cardTitle= {Card_Data[3].cardTitle} 
      image={Card_Data[3].image} 
      description={Card_Data[3].description}
      />

      
      



    </>
  )
}

export default App

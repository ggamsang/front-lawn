import { useEffect, useState } from 'react'
import './App.css'

const MyLawn = () => {
  return <table></table>
}
function App() {
  useEffect(()=>{
    console.log("hello!")
  },[])
  return (
    <>
      <MyLawn/>   
    </>
  )
}

export default App

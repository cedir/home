import { useState } from 'react'
import Homepage from '../home/Homepage';
import Navbar from '../navbar/Navbar';
import Pie from '../home/Pie';

function App() {
  const [titulo, setTitulo] = useState('');
  return (
    <>
      <Navbar />
      <Homepage />
      {/* <Pie /> */}
    </>
  )
}

export default App

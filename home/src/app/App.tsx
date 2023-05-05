import { useState } from 'react'
import Homepage from '../home/Homepage';
import Navbar from '../navbar/Navbar';
import Pie from '../home/Pie';
import Seccion from '../home/Seccion';

function App() {
  const [titulo, setTitulo] = useState('');
    const [adminMode, setAdminMode] = useState(true);
    return (
    <>
      <Navbar />
      <Homepage adminMode={ adminMode } />
      <Seccion adminMode={ adminMode }>
        <Pie />
      </Seccion>
    </>
  )
}

export default App

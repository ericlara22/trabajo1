import React, {useState} from 'react';
import Boton from './components/Boton';

const App=()=> {

const [numero, setNumero] = useState(4)


  return(
    <div>
      Hola
    <Boton mensaje="Hola" numero={numero} setNumero={setNumero} />

    </div>
  )
}  


export default App;


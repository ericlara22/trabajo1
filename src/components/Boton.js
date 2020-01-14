import React from 'react';

function Boton({mensaje, numero, setNumero}) {
   const aumento = () => {
       setNumero(numero+1)
   }



    return (
        <div>
            <button onClick={aumento}>
                Presionar {mensaje} {numero}
            </button>
        </div>
    );
}

export default Boton;
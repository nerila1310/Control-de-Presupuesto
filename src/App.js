import React, {useState} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {

    //definir el state
    const [presupuesto, guardarPresupuesto] = useState(0);
    const [restante, guardarRestante] = useState(0);

    return (
        <div>
            <header>
                <h1>Gasto Semanal</h1>
                
                <div className="contenido-principal contenido">
                    <Pregunta 
                        guardarPresupuesto={guardarPresupuesto}
                        guardarRestante={guardarRestante}
                    />

                    <di className="row">
                        <div className="one-half column">
                            <Formulario />
                        </div>
                        <div className="one-half column">
                            2
                        </div>
                    </di>
                </div>

            </header>
        </div>

    );
}

export default App;

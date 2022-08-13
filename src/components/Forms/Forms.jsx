import './Forms.css';
import {useState} from 'react';

const Formulario = () => {

    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const [error, setError] = useState(false);
    const [acceso, setAcceso] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();

        if(usuario === '' || clave === '') {
            setError(true);
            return
        }
        setError(false);

        if(clave === '252525') {
            setAcceso(true);
        } else {
            alert('Contraseña incorrecta');
            setAcceso(false);
            setClave('');
            const inputClave = document.querySelector('#inputclave').value = '';            
        }
    }  

    return (
        <form className="login-form" onSubmit={validarDatos}>
            {error ? <p>Todos los campos son obligatorios</p> :null}                 
            <h3>Ingrese a su cuenta</h3>
            <div className='input-div'>
                <label htmlFor="">Usuario</label>
                <input placeholder='Usuario' name="usuario" onChange={(e) => setUsuario(e.target.value)}/>
                <label htmlFor="">Contraseña</label>
                <input id="inputclave" placeholder='Contraseña'type="password" name="clave"  onChange={(e) => setClave(e.target.value)}/>
                <button type="submit">Acceder</button>       
            </div>
            {acceso ? <p>Login correcto, accediendo a su cuenta</p> :null}     
            
        </form>
    )
}

export default Formulario;
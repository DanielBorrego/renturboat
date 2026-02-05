import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

export const LogIn = ()=>{
    const [showPassword, setShowPassword] = useState(false);
    //Referencia para enfocar el input de contraseña automáticamente
    const passwordInputRef = useRef<HTMLInputElement>(null);
    //Comprobamos que la tecla seleccionada sea enter
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Verificamos si la tecla es 'Enter' y si el input no está vacío
        if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
            setShowPassword(true);
        }
    };
    // 4. Efecto para poner el foco en el password cuando aparece
    useEffect(() => {
        if (showPassword && passwordInputRef.current) {
            passwordInputRef.current.focus();
        }
    }, [showPassword]);
    return(
        <div className='container'>
            <div className='title'>
                <h1>Log In on RentUrBoat</h1>
            </div>
            <div className='information'>
                <label htmlFor="mail">Email or Phone Number </label>
                <input type="text" 
                id="contact" 
                name="contact" 
                placeholder="example@gmail.com or 123456789"
                pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}|[0-9]{9,15})$"
                title="Enter a valid email address or a number with 9 to 15 digits"
                required
                onKeyDown={handleKeyDown}
                disabled={showPassword} //se desabilita si ya se enseña la contra
                ></input>
                {/*solo se muestra si esta en true*/}
                {showPassword && (
                <div className='information' style={{ marginTop: '1rem' }}>
                    <label htmlFor="password">Password</label>
                    <input 
                        ref={passwordInputRef} // Conectamos la referencia
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your password"
                        required 
                />
                </div>
                )}
            </div>
            <div className='containerCheckBoxes'>
                <Link to="/Register"><h2>I don't have an account</h2></Link>
                <div>
                    <label htmlFor="">Remember me</label>
                    <input type="checkbox" />
                </div>
                <a href="#forgotpassword"><p><u>I forgot my password</u></p></a>
            </div>
            
        </div>
    )
}
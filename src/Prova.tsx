import { useState, useRef, useEffect } from 'react';
import './LogIn.css';

export const LogIn = () => {
    // 1. Estado para controlar la visibilidad del input de contraseña
    const [showPassword, setShowPassword] = useState(false);
    
    // 2. Referencia para enfocar el input de contraseña automáticamente
    const passwordInputRef = useRef<HTMLInputElement>(null);

    // 3. Manejador del evento de tecla
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

    return (
        <div>
            <div>
                <h1>Log In in RentUrBoat</h1>
            </div>
            
            <div className='information'>
                <label htmlFor="contact">Email or Phone Number</label>
                <input 
                    type="text" 
                    id="contact" 
                    name="contact" 
                    placeholder="example@gmail.com or 123456789"
                    pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}|[0-9]{9,15})$"
                    title="Enter a valid email address or a number with 9 to 15 digits"
                    required
                    // Añadimos el evento aquí
                    onKeyDown={handleKeyDown}
                    // Deshabilitamos si ya mostramos el password (opcional, por estilo)
                    disabled={showPassword} 
                />
            </div>

            {/* 5. Renderizado condicional: Solo se muestra si showPassword es true */}
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
    );
}
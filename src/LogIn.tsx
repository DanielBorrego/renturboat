import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

export const LogIn = () => {
    const [contact, setContact] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const [password, setPassword] = useState('');


    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const phoneRegex = /^[0-9]{9,15}$/;

    const validateContact = (value: string) => {
        return emailRegex.test(value) || phoneRegex.test(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const value = contact.trim();

            if (value === '') return;

            if (!validateContact(value)) {
                setError('Please enter a valid email or a 9 to 15 digit phone number');
                setShowPassword(false);
            } else {
                setError('');
                setShowPassword(true);
            }
        }
    };
    const handleLogin = async () => {
        setError('');

        const res = await fetch("http://localhost/Proyecto/Login.php", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contact,
                password
            })
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.error || "Login failed");
            return;
        }

        // Guardar nombre en localStorage (opcional)
        localStorage.setItem("userName", data.name);

        // Redirigir o actualizar UI
        window.location.href = "/";
    };


    useEffect(() => {
        if (showPassword && passwordInputRef.current) {
            passwordInputRef.current.focus();
        }
    }, [showPassword]);

    return (
        <div className='container'>
            <div className='title'>
                <h1>Log In on RentUrBoat</h1>
            </div>

            <div className='information'>
                <label>Email or Phone Number</label>
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="example@gmail.com or 123456789"
                    onKeyDown={handleKeyDown}
                    required
                />

                {error && (
                    <p style={{ color: 'red', fontSize: '0.9rem' }}>
                        {error}
                    </p>
                )}

                {showPassword && (
                    <div className='information' style={{ marginTop: '1rem' }}>
                        <label>Password</label>
                        <input
                            ref={passwordInputRef}
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                        <button onClick={handleLogin}>Log In</button>
                    </div>
                )}
            </div>

            <div className='containerCheckBoxes'>
                <Link to="/Register"><h2>I don't have an account</h2></Link>
                <div>
                    <label>Remember me</label>
                    <input type="checkbox" />
                </div>
                <a href="#forgotpassword"><p><u>I forgot my password</u></p></a>
            </div>
        </div>
    );
};
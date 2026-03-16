import './Register.css';
import { useState, useEffect, useRef } from 'react';
import videoWelcome from './welcome_Register.mp4';
import { useNavigate } from 'react-router-dom';
import eyeOpenSvg from './eye-open.svg';
import eyeClosedSvg from './eye-closed.svg';

export const Register = () =>{
    const [dni, setDni] = useState("");
    const [nom, setNom] = useState("");
    const [cognom, setCognom] = useState("");
    const [dataNaixement, setData] = useState("");
    const [telefon, setTelefon] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [adreca, setAdreca] = useState("");
    const [poblacio, setPoblacio] = useState("");
    const [codiPostal, setCodipostal] = useState("");
    const [message, setMessage] = useState("")
    const [contactError] = useState(''); //setContactError
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const phoneRegex = /^[+0-9]+[ ]+[0-9]{9,15}$/;
    const dniRegex = /^[0-9]{8}[A-Z]{1}$/;
    const postalCodeRegex = /^[0-9]{5}$/;
    const [error, setError] = useState('');

    const validateDni = (value: string ) =>{
        return dniRegex.test(value);
    }
    const validatePostalCode = (value : number) =>{
        return postalCodeRegex.test(String(value));
    }
    const validateEmail = (value: string) => {
        return emailRegex.test(value);
    };
    const validatePhone = (value: Number) =>{
        return phoneRegex.test(String(value));
    }

    const errorMesages = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter'){
            const value = dni.trim();
            const cp = codiPostal.trim();
            const gmail = email.trim();
            const number = telefon.trim();
            if(!validateDni(value)){
                setError("Please type a valid ID");
            }
            if(!validatePostalCode(Number(cp))){
                setError("Please type a valid postal code")
            }
            if(!validateEmail(gmail)){
                setError("Please enter a valid email");
            }
            if(!validatePhone(Number(number))){
                setError("Please enter a valid phone number");
            }
        }
    }
    //connectar con la base de datos, acabar de arreglar para poder enviar las peticiones a cliente, un empleado no se podra crear desde la web, lo debera de hacer el administrador directamente desde sql
    const submit = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost/proyecto/Request-verification.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    DNI: dni,
                    nom,
                    cognoms: cognom,
                    data_naixement: dataNaixement,
                    telefon,
                    email,
                    contrasenya: contrasena,
                    adreca,
                    poblacio,
                    codi_postal: codiPostal
                })
            });

            const data = await response.json();
            setMessage(data.message || data.error);
            // navigate to validation page on success (assume HTTP OK)
            if (response.ok) {
                navigate('/RegisterValidation', {state: {email, tempId: data.tempId} });
            } else{
                setMessage(data.error || "Error");
            }
        } catch (error) {
            setMessage("Error al conectar con el servidor");
        }
    }

    const [showVideo, setShowVideo] = useState(false);
    useEffect(() => {
        const videoShown = sessionStorage.getItem("welcomeVideoShown");

        if (!videoShown) {
            setShowVideo(true);

            setTimeout(() => {
                setShowVideo(false);
                sessionStorage.setItem("welcomeVideoShown", "true");
            }, 4000); // 4 segundos
        }
    }, []);
    return(
        <div className='container'>
            {showVideo && (
            <div className="video-overlay">
                <video
                    src={videoWelcome}
                    autoPlay
                    muted
                    playsInline
                />
            </div>
        )}
            <form className='register' onSubmit={submit}>
                <h1 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 600, marginBottom: '20px' }}>
                Create Account
                </h1>
                
                <div className="input-group">
                    <input
                        type="text"
                        pattern='^[0-9]{8}[A-Z]$'
                        title="Enter a valid ID"
                        required
                        maxLength={9}
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                    />
                    <label className={dni ? "filled" : ""}>DNI</label>
                </div>
                {error && (
                    <p style={{ color: 'red', fontSize: '0.9rem' }}>
                        {error}
                    </p>
                )}

                <div className="input-group">
                    <input
                        type="text"
                        pattern='^[A-Za-z ]+$'
                        required
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />
                    <label className={nom ? "filled" : ""}>Name</label>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        pattern='^[A-Za-z ]+$'
                        required
                        value={cognom}
                        onChange={(e) => setCognom(e.target.value)}
                    />
                    <label className={cognom ? "filled" : ""}>Surname</label>
                </div>

                <div className="input-group">
                    <input
                        type="datetime"
                        required
                        value={dataNaixement}
                        onChange={(e) => setData(e.target.value)}
                    />
                    <label className={dataNaixement ? "filled" : ""}>Birth Date</label>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        maxLength={19}
                        value={telefon}
                        onChange={(e) => setTelefon(e.target.value)}
                    />
                    <label className={telefon ? "filled" : ""}>Telephone</label>
                </div>

                <div className="input-group">
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className={email ? "filled" : ""}>Email</label>
                </div>
                {contactError && (
                    <p style={{ color: 'red', fontSize: '0.9rem' }}>{contactError}</p>
                )}

                <div className="input-group password-input-group">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        ref={passwordInputRef}
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                    />
                    <label className={contrasena ? "filled" : ""}>Password</label>
                    <button
                        type="button"
                        className="password-toggle-btn"
                        onClick={() => setShowPassword(prev => !prev)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        title={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? (
                            <img src={eyeOpenSvg} alt="Show password" className="eye-icon" />
                        ) : (
                            <img src={eyeClosedSvg} alt="Hide password" className="eye-icon" />
                        )}
                    </button>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        value={adreca}
                        onChange={(e) => setAdreca(e.target.value)}
                    />
                    <label className={adreca ? "filled" : ""}>Address</label>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        required
                        pattern='^[A-Za-z ]+$'
                        value={poblacio}
                        onChange={(e) => setPoblacio(e.target.value)}
                    />
                    <label className={poblacio ? "filled" : ""}>Location</label>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        required
                        pattern='^[0-9]{5}$'
                        maxLength={5}
                        value={codiPostal}
                        onChange={(e) => setCodipostal(e.target.value)}
                    />
                    <label className={codiPostal ? "filled" : ""}>Postal Code</label>
                </div>
                
                <button className='button' type="submit">Register</button>

                {message && <p>{message}</p>}

            </form>
        </div>
    )
}
import './Register.css';
import { useState, type FormEvent, useEffect } from 'react';
import videoWelcome from './welcome_Register.mp4';
import { Link } from 'react-router-dom';

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

    const submit = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost/proyecto/register.php", {
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
                <label>DNI</label>
                <input
                    type="text"
                    placeholder='12345678A'
                    pattern='^[0-9]{8}[A-Z]$'
                    title="Enter a valid ID"
                    required
                    maxLength={9}
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                />

                <label>Name</label>
                <input
                    type="text"
                    placeholder='Name'
                    pattern='^[A-Za-z ]+$'
                    required
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />

                <label>Surname</label>
                <input
                    type="text"
                    placeholder='Surname1 Surname2'
                    pattern='^[A-Za-z ]+$'
                    required
                    value={cognom}
                    onChange={(e) => setCognom(e.target.value)}
                />

                <label>Birth Date</label>
                <input
                    type="datetime-local"
                    required
                    value={dataNaixement}
                    onChange={(e) => setData(e.target.value)}
                />

                <label>Telephone</label>
                <input
                    type="text"
                    placeholder='+34123456789'
                    maxLength={13}
                    value={telefon}
                    onChange={(e) => setTelefon(e.target.value)}
                />

                <label>Email</label>
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="example@gmail.com"
                    pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}|[0-9]{9,15})$"
                    title="Enter a valid email address or a number with 9 to 15 digits"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    required
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />

                <label>Adress</label>
                <input
                    type="text"
                    placeholder='Street Example, n1'
                    value={adreca}
                    onChange={(e) => setAdreca(e.target.value)}
                />

                <label>Location</label>
                <input
                    type="text"
                    placeholder='Location'
                    required
                    pattern='^[A-Za-z ]+$'
                    value={poblacio}
                    onChange={(e) => setPoblacio(e.target.value)}
                />

                <label>Postal Code</label>
                <input
                    type="text"
                    placeholder='12345'
                    required
                    pattern='^[0-9]{5}$'
                    maxLength={5}
                    value={codiPostal}
                    onChange={(e) => setCodipostal(e.target.value)}
                />
                
                <Link to="/RegisterValidation"><button type="submit">Register</button></Link>

                {message && <p>{message}</p>}

            </form>
        </div>
    )
}
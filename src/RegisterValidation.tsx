import {useState} from 'react';import { useLocation, useNavigate } from 'react-router-dom';
;

export const RegisterValidation = () =>{
    const loc = useLocation();
    const navigate = useNavigate();
    const state = (loc.state || {}) as { email?: string, tempId?: number };
    const [email] = useState(state.email || '');
    const [tempId] = useState<number | null>(state.tempId ?? null);
    const [code, setCode] = useState('');
    const [msg, setMsg] = useState<string | null>(null);

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        try{
            const res = await fetch('http://localhost/Proyecto/Verify_code.php', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({ email, code, tempId })
            });
            const data = await res.json();
            if (res.ok) {
                setMsg('Verified. Account Created.');
                navigate('/login');
            } else {
                setMsg(data.error || 'Error');
            }
        } catch(err){
            setMsg('Conection Error')
        }
    }
    return(
        <form onSubmit={submit}>
            <p>Se ha enviado un código a <strong>{email}</strong></p>
            <input value={code} onChange={e => setCode(e.target.value)} placeholder="Código" required />
            <button type="submit">Verificar</button>
            {msg && <p>{msg}</p>}
        </form>
    )
}
import './Register.css';

export const Register = () =>{
    return(
        <div className='container'>
            <div className='register'>
                <label htmlFor="">DNI</label>
                <input type="text" placeholder='12345678A' pattern='^([0-9]{8}[A-Z]{1})$'
                title="Enter a valid ID"
                required/>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Name' pattern='^([A-Za-z])$' required />
                <label htmlFor="">Surname</label>
                <input type="text" placeholder='Surname1 Surname2' pattern='^[A-Za-z]$' required/>
                <label htmlFor="">Birth Date</label>
                <input type="datetime-local" required placeholder='00/00/0000'/>
                <label htmlFor="">Telephone</label>
                <input type="text" /> {/* Arreglar el input del telefono para poder poner +34,+35... */}
                <label htmlFor="">Email</label>
                <input type="text" 
                id="contact" 
                name="contact" 
                placeholder="example@gmail.com"
                pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}|[0-9]{9,15})$"
                title="Enter a valid email address or a number with 9 to 15 digits"
                required />
                <label htmlFor="">Password</label>
                <input type="password" required />
                <label htmlFor="">Adress</label>
                <input type="text" placeholder='Street Example, n1'/>
                <label htmlFor="">Province</label>
                <input type="text" placeholder='Province' required pattern='^[A-Z,a-z]$' />
                <label htmlFor="">Postal Code</label>
                <input type="text" placeholder='12345' required pattern='^[0-9]{5}$' />
                
            </div>
        </div>
    )
}
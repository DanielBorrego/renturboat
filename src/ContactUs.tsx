import './ContactUs.css';

export const ContactUs = () =>{
    return(
        <div className='Container'>
            <div className='Title'><h1>Contact Us</h1></div>
            <div className='Cards-container'>
                <div className='Card'>
                    <div className='Card-title'><h1>Palamos</h1></div>
                    <div className='Card-content'>
                        <h3>Email:</h3>
                        <h3 className='clipBoard'>renturboat@gail.com</h3>
                        <h3>Phone:</h3>
                        <h3 className='clipBoard'>+34-972-387-913</h3>
                    </div> 
                </div>
                <div className='Card'>
                    <div className='Card-title'><h1>Palafrugell</h1></div>
                    <div className='Card-content'>
                        <h3>Email:</h3>
                        <h3 className='clipBoard'>renturboat@gmail.com</h3>
                        <h3>Phone:</h3>
                        <h3 className='clipBoard'>+34-972-317-812</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
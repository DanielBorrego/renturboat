import barcos from './barcos.png' //para importar la imagen

export default function HeaderPrincipal() { //aqui pondre el contenedor doonde ira todo el header
    return(
        <header className="bg-gray-100">
            <nav>
                <div><a href="https://www.google.com/search?sca_esv=75a4ac89eb4f2f79&udm=2&fbs=AIIjpHwRYWovL8tZMWN0SjIoRjFadwlMn3yd-LTOLXrsY97GExEkrDXwcfM5ozkGfMkhwVILbkIKuttVP8V2_XkwAQYgqmHM4ZwKf9QEssAXgs6D9OUCvmKoQp_BPLWdoZyUbJwvG8dRPXarfogvnq5nkBak1hkGKIqi40nb9PFlh9lSv3Fe9_ZKEzRma9YBtN6z-Y7lhzm9KJUiPc2PDVGQRk-roesvsQ&q=barcos&sa=X&ved=2ahUKEwicgeHkn6SRAxW7OPsDHZU5DLgQtKgLegQIFhAB&biw=1920&bih=992&dpr=1&safe=active&ssui=on">
                <img src={barcos} alt="Barcos" className='logo' /></a></div> {/*tenemos el a que pilla la imagen y le da un enlace */}
                <span className='text-blue-500 font-medium cursor-pointer'> Inicio </span>
                <span className='cursor-pointer'> Nosotros </span>
                <span className='cursor-pointer'> Barcos </span>
                <span className='cursor-pointer'> Rutas </span>
                <span className='cursor-pointer'> Contacto </span>
            </nav>
        </header>
    );
}
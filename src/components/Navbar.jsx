import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav>

            <div className="burguer-menu">
                <i className="fa-solid fa-bars"></i>
            </div>

            <a href='/'><img src="/Logo-Marvel-Blanco.svg" alt="Logo de Marvel en color blanco" className='logo'/></a>

            <div className="menus">
                <div className='menu-section'>
                    <h1>Menú</h1>
                    <ul>
                        <li>
                            <Link to='/' className='navbar-label'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/Peliculas' className='navbar-label'>Peliculas</Link>
                        </li>
                        <li>
                            <Link to='/Usuarios' className='navbar-label'>Usuarios</Link>
                        </li>
                    </ul>
                </div>

                <div className='general-section'>
                    <h1>General</h1>
                    <ul>
                        <li>
                            <Link to='/Participantes' className='navbar-label'>Participantes</Link>
                        </li>
                        <li>
                            <Link to='/Configuracion' className='navbar-label'>Configuraciones</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar

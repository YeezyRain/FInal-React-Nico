import './Navbar.css'
import { Link, Navigate } from 'react-router-dom'
import img from './logoDer.png'
import carrito from './carrito.png'
import { Dropdown } from 'semantic-ui-react'
import { useCartContext } from '../../context/CartContext'

const Navbar = () => {
    let history = Navigate()
    const categoriesOptions = [
        {
            key: 'todo',
            text: 'Todas las categorias',
            value: '',
        },
        {
            key: 'cervezas',
            text: 'cervezas',
            value: 'cervezas',
        },
        {
            key: 'fernet',
            text: 'fernet',
            value: 'fernet',
        },
        {
            key: 'aperitivos',
            text: 'aperitivos',
            value: 'aperitivos',
        },
        {
            key: 'whisky',
            text: 'whisky',
            value: 'whisky',
        },
        {
            key: 'otros',
            text: 'otros',
            value: 'otros',
        },
    ]

    const { cart } = useCartContext()

    const redirect = (event, { name, value }) => {
        if (value === '') {
            history.push('/')
        } else {
            history.push('/category/' + value)
        }
    }

    let cantidad = 0
    cart.map((cartElement) => {
        cantidad += cartElement.quantity
        return cantidad
    })

    return (
        <div className="nav">
            <div className="logo">
                <Link to="/">
                    {' '}
                    <img
                        className="logo"
                        src={img}
                        alt="Logo"
                    />{' '}
                </Link>
            </div>
            <div className="linksNavbar">
                <Link to="/" className="linkNavbar">
                    Home
                </Link>
                <Link to="/nosotros" className="linkNavbar">
                    Nosotros
                </Link>
                <Link to="/contacto" className="linkNavbar">
                    Contacto
                </Link>
            </div>
            <Dropdown
                className="categorySelector"
                placeholder="Seleccione una categoria"
                selection
                options={categoriesOptions}
                onChange={redirect}
            />
            {cart.length > 0 ? (
                <Link to="/cart">
                    <img
                        src={carrito}
                        alt="Carrito de compras"
                        className="carrito"
                    />
                    <p className="cantidad">{cantidad}</p>
                </Link>
            ) : null}
        </div>
    )
}
export default Navbar

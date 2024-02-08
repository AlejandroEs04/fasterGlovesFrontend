import React from 'react'
import { Link } from 'react-router-dom'
import useShop from '../hooks/useShop'
import ddcodelogo from "../../public/img/ddcodeLogo.svg"
import logo from '../../public/img/LogoWhite.png'

const Footer = () => {
    const { types } = useShop();

    return (
        <footer className='grid grid-cols-3 bg-neutral-800 px-36 py-10 h-96'>
            <div>
                <Link to={'/'} className="flex flex-col items-start ">
                    <img src={logo} alt="logo DD-code" className="w-36" />
                </Link>
                <div className="flex flex-col items-start mt-10">
                    <p className="text-sky-600 font-bold">Desarrollado por:</p>
                    <Link to={'https://www.dd-code.com'}>
                        <img src={ddcodelogo} alt="logo DD-code" className="w-24 invert -ml-1.5" />
                    </Link>
                </div>
            </div>

            <div>

            </div>

            <div className='text-end'>
                <h3 className='font-bold text-xl text-neutral-200'>Navegacion</h3>
                <nav className='flex flex-col'>
                    <a href='/' className='text-lg text-neutral-100 mb-1'>Inicio</a>
                    <a href='/Products' className='text-lg text-neutral-100'>Productos</a>
                    {types?.map(type => (
                        <a key={type.ID} href={`/products/${type.name}`} className='text-sm text-neutral-300'>{type.name}</a>
                    ))}
                    <a href='/carrito' className='text-lg text-neutral-100 mt-1'>Carrito</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer

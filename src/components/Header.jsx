import { Link } from 'react-router-dom';
import useShop from '../hooks/useShop';
import useAuth from '../hooks/useAuth';
import Logo from '../../public/img/Logo.png'

const Header = () => {
  const { types } = useShop();
  const { auth, logOut } = useAuth();

  return (
    <>
      <header className='top-0 sticky bg-neutral-100 bg-opacity-70 backdrop-blur-xl w-full flex items-center justify-around px-2 py-3 shadow-lg z-10'>
        <Link to={'/'} className='flex h-full items-start'>
          <img src={Logo} alt="Logo Faster Gloves" className='w-32' />
        </Link>

        <div>
          <nav className='flex gap-2 navegacionInicio h-10 items-center'>
            <ul className='flex items-center'>
              <li className='inline-block relative text-neutral-600 font-medium text-lg hover:text-sky-600 transition-colors px-2'><Link to='/'>Inicio</Link></li>
              <li className='inline-block relative text-neutral-600 font-medium text-lg hover:text-sky-600 transition-colors px-2'>
                <Link to='/products'>Productos</Link>
                <ul className='bg-neutral-50 text-end flex flex-col'>
                  {types?.map(type => (
                    <li key={type.ID} className='text-neutral-500 hover:text-neutral-100 hover:bg-sky-600 transition-colors px-2'><Link to={`/products/${type.ID}`}>{type.name}</Link></li>
                  ))}
                </ul>
              </li>

              <li className='inline-block relative text-neutral-600 font-medium text-lg hover:text-sky-600 transition-colors px-2'>
                <Link to='/user/cart' className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  <p>Carrito</p>
                </Link>
              </li>

              {auth.ID && (
                <li className='inline-block relative text-neutral-600 font-medium text-lg hover:text-sky-600 transition-colors px-2'>
                  <Link to={!auth.admin ? '/user/porfile' : '/admin'} className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>

                    <p>Porfile</p>
                  </Link>
                </li>
              )}

              {!auth.ID ? (
                <li className='inline-block relative text-sky-600 font-medium text-lg hover:text-sky-700 transition-colors pl-6'><Link to='/login'>Iniciar Sesion</Link></li>
              ) : (
                <li className='inline-block relative text-red-600 font-medium text-lg hover:text-red-700 transition-colors pl-6'>
                  <button onClick={() => logOut()} >Cerrar Sesion</button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header

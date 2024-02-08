import { Link } from "react-router-dom"
import logo from '../../public/img/LogoAdminWhite.png'

const AdminHeader = () => {
  return (
    <div className='bg-neutral-700 px-2 py-3 flex items-center justify-around'>
        <Link to={'/'}>
          <img src={logo} alt="Logo Admin" className='w-32'/>
        </Link>

        <nav className='flex gap-3'>
            <Link to='/admin' className='text-neutral-100 font-bold text-base hover:text-sky-500 transition-colors' >Inicio</Link>
            <Link to='/admin/products' className='text-neutral-100 font-bold text-base hover:text-sky-500 transition-colors' >Productos</Link>
            <Link to='/admin/buy' className='text-neutral-100 font-bold text-base hover:text-sky-500 transition-colors' >Compras</Link>
            <Link to='/admin/articles' className='text-neutral-100 font-bold text-base hover:text-sky-500 transition-colors' >Articulos</Link>
        </nav>
    </div>
  )
}

export default AdminHeader

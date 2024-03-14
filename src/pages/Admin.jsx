import { Link } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"
import BuyContainer from "../components/BuyContainer";

const Admin = () => {
  const { buys } = useAdmin();

  return (
    <div className='flex justify-center py-10 px-5'>
      <div className='w-full md:w-2/3 xl:w-1/2'>
        <h1 className='text-sky-600 font-bold text-2xl uppercase'>Zona de Administracion</h1>
        <p className='text-neutral-500 font-bold'>Gestione la informacion de la pagina y de sus ventas y envios</p>
        <div className=" overflow-x-hidden">
          <div className='flex gap-2 mt-4 overflow-x-auto' >
            <Link to='/admin/products'>
              <div className='bg-sky-600 p-4 rounded-lg w-64 h-full flex flex-col justify-center'>
                <h3 className='text-lg font-bold text-neutral-100 uppercase'>Administrar Productos</h3>
                <p className='text-neutral-300'>Ve, edita y elimina los productos existentes</p>
              </div>
            </Link>

            <Link to='/admin/buy'>
              <div className='bg-sky-900 p-4 rounded-lg w-64 h-full flex flex-col justify-center'>
                <h3 className='text-lg font-bold text-neutral-100 uppercase'>Administrar Compras</h3>
                <p className='text-neutral-300'>Gestiona las compras realizadas</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-5 w-full">
          <h2 className="text-xl font-bold text-neutral-600 uppercase mb-2">Envios pendientes</h2>
          <div className="flex flex-col gap-4">
            {buys?.map(buy => !buy.delivery[0].delivered && (
              <BuyContainer 
                key={buy.ID}
                buy={buy}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin

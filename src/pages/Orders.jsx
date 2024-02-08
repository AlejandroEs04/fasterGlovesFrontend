import { useEffect } from 'react'
import useShop from '../hooks/useShop'
import BuyContainer from '../components/BuyContainer';
import UserBuy from '../components/UserBuy';

const Orders = () => {
  const { handleGetBuy, orders } = useShop();

  useEffect(() => {
    handleGetBuy();
  }, [])

  console.log(orders)

  return (
    <div className='flex justify-center my-10'>
      <div className='w-full md:w-2/3 xl:w-1/2'>
        <h1 className='text-2xl text-neutral-700 uppercase font-semibold text-center mb-4'>Mis pedidos</h1>

        <div>
          {orders?.map(order => !order?.delivery[0].delivered && (
            <UserBuy 
              key={order.ID}
              buy={order}
            />
          ))}
        </div>

        <h1 className='text-2xl text-neutral-700 uppercase font-semibold text-center mb-4 mt-10'>Historial</h1>

        <div>
          {orders?.map(order => order?.delivery[0].delivered && (
            <UserBuy 
              key={order.ID}
              buy={order}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders
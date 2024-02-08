import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth'
import useShop from '../hooks/useShop';
import CartProducts from '../components/CartProducts';
import AddressForm from '../components/AddressForm';
import { formatearDinero } from '../helpers';
import PayPal from '../components/PayPal';

const BuySeccion = () => {
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [sent, setSent] = useState(100); 

  const { cart, handleGetCart } = useShop();
  const { auth } = useAuth();

  useEffect(() => {
    handleGetCart();
  }, []);

  useEffect(() => {
    if(cart.length >= 1) {
      const calculoSubtotal = cart.reduce((total, cartProduct) => total + (
        // El carrito tiene mas de 10 productos 
        cartProduct.cantidad >= 10 ?
        // El residuo de la cantidad de productos es 0
        cartProduct.cantidad % 10 === 0 ? (1000 * (cartProduct.cantidad / 10)) : 

        // El residuo no es 0 pero es mayor a 10
        ((Math.floor(cartProduct.cantidad / 10) * 1000) + ((cartProduct.cantidad % 10) * cartProduct.products.price)) :

        // La cantidad de productos no es mayor a 10
        (cartProduct.products.price * cartProduct.cantidad))
        , 0
      )
      setSubtotal(calculoSubtotal)

      const calculoAmount = cart.reduce((amount, cartProduct) => amount + cartProduct.cantidad, 0)
      setAmount(calculoAmount)

      if(auth.state === 'Nuevo León' || auth.state === 'Nuevo Leon') {
        if(auth.city === 'Apodaca' || auth.city === 'Guadalupe' || auth.city === 'General Escobedo' || auth.city === 'Escobedo' || auth.city === 'San Nicolás' || auth.city === 'San Nicolas' || auth.city === 'San Pedro Garza García' || auth.city === 'San Pedro Garza Garcia' || auth.city === 'Santa Catarina') {
          setSent(100);
        } else {
          setSent(400)
        }
      } else {
        const calculoSent = cart.reduce((sent, cartProduct) => sent + cartProduct.cantidad * 20, 0)
        setSent(calculoSent)
      }
    }
  }, [cart])

  useEffect(() => {
    setTotal(subtotal + sent);
  }, [subtotal])

  return (
    <div className='flex flex-col items-center py-10'>
      <h1 className='text-2xl font-bold uppercase text-sky-600'>Finalizar Compra</h1>
      <div className='flex flex-col lg:grid lg:grid-cols-2 w-full md:w-1/2 max-w-1/2 px-4 gap-5 mt-5 md:min-w-max relative'>
        <div className='flex flex-col gap-4 min-h-full md:max-w-md'>
          <div className='bg-white rounded shadow-lg py-2'>
            <h3 className='px-5 text-lg font-bold text-neutral-600 mt-1'>Direccion de entrega</h3>
            <AddressForm 
              button={false}
              active={true}
            />
          </div>
          <CartProducts 
            cart={cart}
            buttons={false}
          />
        </div>

        <div className='flex flex-col gap-4 w-full sticky top-0'>
          <div className='bg-neutral-600 rounded p-5 flex w-full h-max flex-col'>
            <h3 className='text-neutral-100 font-bold text-2xl'>Resumen de la compra</h3>

            <p className='text-sky-400 font-semibold uppercase text-lg mt-4'>Subtotal: <span className='font-bold text-neutral-100'>{formatearDinero(subtotal)} MXN</span></p>
            <p className='text-sky-500 font-bold uppercase mt-1'>Cantidad: <span className='font-extrabold text-neutral-100 capitalize'>{amount} productos</span></p>

            <p className='text-sky-500 font-bold uppercase mt-1'>Costo envio: <span className='font-extrabold text-neutral-100 capitalize'>{formatearDinero(sent)}</span></p>

            <p className='text-sky-400 font-bold uppercase text-2xl mt-4'>Total: <span className='font-bold text-neutral-100'>{formatearDinero(subtotal + sent)} MXN</span></p>

            <div className='mt-10'>
              <PayPal 
                total={total}
              />
            </div>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default BuySeccion

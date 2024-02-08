import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { formatearDinero } from '../helpers';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';
import useShop from '../hooks/useShop';

const ProductsCarrousel = () => {
    const [knowMore, setKnowMore] = useState(false);
    const [sizeID, setSizeID] = useState(1);
    const [cantidad, setCantidad] = useState(1);
    const { products, sizes, handleSaveCarrito } = useShop();

    return (
        <div className='overflow-x-hidden'>
            <div className='flex gap-4 overflow-x-auto'>
                {products?.map(product => (
                        <div className='bg-neutral-100 rounded p-4 mb-2 w-72 flex flex-col justify-between' key={product.ID}>
                            <div className='mb-2 flex justify-center'>
                                <img src={product.imageUrl} alt={`Imagen del producto ${product.name}`} className='w-56' />
                            </div>
                            <div>
                                <p className='font-semibold text-lg text-sky-600'>{product.name}</p>

                                <div className='flex flex-col mt-2'>
                                    <label className='font-bold text-neutral-600'>Talla</label>
                                    <select
                                        className='py-1 my-1 px-2 border'
                                        onChange={(e) => setSizeID(e.target.value)}
                                    >
                                        {sizes?.map(size => (
                                            <option key={size.ID} value={size.ID} >{size.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='font-bold text-neutral-600'>Cantidad</label>
                                    <input type='number' min={1} className='py-1 my-1 px-2 border' value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                                </div>

                                <div className='mt-4'>
                                    
                                    <p className='text-xl font-extrabold text-neutral-700'>{formatearDinero(product.price)} mxn</p>
                                    <button
                                        onClick={() => handleSaveCarrito(product.ID, sizeID, cantidad)} 
                                        className='bg-sky-600 px-2 py-1 rounded mt-2 flex gap-2 items-center text-neutral-100 hover:bg-sky-700 transition-colors'
                                    >
                                        <p>Agregar al carrito</p>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsCarrousel
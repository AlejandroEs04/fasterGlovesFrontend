import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useShop from "../hooks/useShop";
import { formatearDinero } from "../helpers";

const Product = () => {
    const [knowMore, setKnowMore] = useState(false);
    const [sizeID, setSizeID] = useState(1);
    const [cantidad, setCantidad] = useState(1);
    const [total, setTotal] = useState(0)

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        if(cantidad % 10 === 0 && cantidad > 0) {
            setTotal((cantidad / 10) * 1000);
        } else {
            setTotal(cantidad * product[0].price)
        }
    }, [cantidad])

    const { products,handleSaveCarrito } = useShop();

    const product = products?.filter(product => +product.ID === +id);

    return (
        <div className="flex justify-center py-5">
            <div className="w-full md:w-2/3 lg:w-1/2 mx-2">
                <h1 className="text-2xl font-bold text-center uppercase">{product[0]?.type.name}</h1> 
                {product?.map(productContainer => (
                    <div className=" text-neutral-800 rounded p-5 flex flex-col md:flex-row gap-10 mt-5" key={productContainer.ID}>
                        <div className="w-2/5">
                            <img src={productContainer.imageUrl} alt={`Imagen del producto ${productContainer.name}`} />
                            <div className="mt-5 pb-2">
                                <p className="font-medium">Tallas disponibles: </p>
                                <div className="flex gap-2 mt-0.5">
                                    {productContainer?.detProductSize.map(size => (
                                        <div key={size.size.ID} className="bg-neutral-500 text-neutral-50 font-medium w-6 h-6 text-center rounded bg-opacity-90 backdrop-blur-xl">
                                            {size.size.letter}
                                        </div>
                                    ))}
                                </div>

                                <p className="mt-4">Material: <span className="text-neutral-800 uppercase font-bold">{productContainer.type.name}</span></p>

                                <p className="mt-1">Cantidad de guantes por caja: <span className="text-neutral-50 font-bold">{productContainer.amount} c/u</span></p>

                                <p className="mt-1 text-lg text-sky-600 font-semibold">Precio: <span className="text-neutral-700 font-bold text-xl">{formatearDinero(productContainer.price)} MXN</span></p>
                                <p className="text-sm">Por cada 10 cajas de guantes del mismo material y talla, en <span className="text-neutral-700 font-bold text-lg">{formatearDinero(1000)}</span></p>
                            </div>
                        </div>

                        <div className="w-3/5">
                            <h2 className="font-bold text-xl text-sky-500">{productContainer.name}</h2>
                            <p className={`${!knowMore && "line-clamp-2"} text-sm`}>{productContainer.description}</p>
                            <button 
                                onClick={() => setKnowMore(!knowMore)}
                                className='text-sm text-sky-500 text-start'
                            >
                                {knowMore ? "Ocultar" : "Saber mas..."}
                            </button>

                            

                            <form className="pt-2">
                                <div className="flex flex-col gap-0.5">
                                    <label htmlFor="size">Eliga la talla</label>
                                    <select 
                                        id="size" 
                                        className="px-2 py-1 text-neutral-600 border rounded"
                                        value={sizeID}
                                        onChange={e => setSizeID(e.target.value)}
                                    >
                                        {productContainer?.detProductSize.map(size => (
                                            <option key={size.size.ID} value={size.size.ID}>{size.size.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col gap-0.5 mt-2">
                                    <label htmlFor="number">Cantidad</label>
                                    <input 
                                        type="number" 
                                        id="number" 
                                        className="px-2 py-1 text-neutral-600 border rounded"
                                        value={cantidad}
                                        onChange={e => setCantidad(e.target.value)} 
                                    />
                                </div>

                                <p className="text-xl mt-4">Total: <span className="font-bold">{formatearDinero(total)} MXN</span></p>

                                <div className='mt-4'>
                                    <button
                                        onClick={() => handleSaveCarrito(productContainer.ID, sizeID, cantidad)} 
                                        className='bg-sky-600 w-full justify-center px-2 py-1 rounded mt-2 flex gap-2 items-center text-neutral-100 hover:bg-sky-700 transition-colors'
                                    >
                                        <p>Agregar al carrito</p>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product
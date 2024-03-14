import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { formatearDinero } from "../helpers"

const UserBuy = ({buy}) => {
    const [step, setStep] = useState(0)
    
    const checkStep = () => {
        if(buy.delivery[0].delivered) {
            setStep(100)
        } else if(buy.delivery[0].onTheWay) {
            setStep(50)
        } else {
            setStep(5)
        }
    }

    useEffect(() => {
        checkStep()
    }, [])

    return (
        <div className="bg-white p-4 rounded-xl shadow flex flex-col lg:grid lg:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col">
                <h3 className=" text-lg font-bold uppercase mb-2">Informacion del pedido</h3>
                <p className="font-bold">ID: <span className=" font-normal">{buy.ID}</span></p>
                <p className="font-bold">Total: <span className=" font-normal">{formatearDinero(buy.amount)}</span></p>

                <p className="font-bold mt-2">Informacion del usuario</p>
                <p className="font-bold">Nombre: <span className="font-normal">{buy.user.name + ' ' + buy.user.lastName}</span></p>
                <p className="font-bold">Correo: <span className="font-normal">{buy.user.email}</span></p>
                <p className="font-bold">Numero: <span className="font-normal">{buy.user.number}</span></p>
                <Link 
                    to={`/buy/${buy.ID}`}
                    className="bg-sky-600 text-neutral-100 px-2 py-1 rounded hover:bg-sky-700 mt-5 text-center"
                >Ver Productos</Link>
            </div>

            <div>
                <div>
                    <div className="flex justify-between">
                        <p className=" font-semibold text-sm">Recibido</p> 
                        <p className=" font-semibold text-sm">En camino</p> 
                        <p className=" font-semibold text-sm">Entregado</p> 
                    </div>
                
                    <div className="w-full h-2 bg-slate-300 rounded">
                        <div
                            style={{
                                width: step + '%'
                            }}
                            className="bg-amber-500 h-full rounded-lg"
                        ></div>
                    </div>
                </div>
                <p className="mt-4 font-bold">Status del pedido</p>
                {buy.delivery[0].delivered ? (
                    <p className=" font-semibold text-green-500">Entregado</p>
                ) : buy.delivery[0].onTheWay ? (
                    <p className=" font-semibold text-green-500">En camino</p>
                ) : (
                    <p className=" font-semibold text-green-500">Recibido</p>
                )}

                <div className="mt-2 flex flex-col gap-1">
                    <p className="text-neutral-700 font-bold text-lg">Direccion de entrega</p>
                    <p className=" font-semibold">Direccion: <span className=" font-normal">{buy.user.address}</span></p>
                    <p className=" font-semibold">Municipio: <span className=" font-normal">{buy.user.city}</span></p>
                    <p className=" font-semibold">C.P. <span className=" font-normal">{buy.user.postalCode}</span></p>
                </div>
            </div>
        </div>
    )
}

export default UserBuy
import { Link } from "react-router-dom"
import Container from "./Container"

const InfoMain = () => {
  return (
    <div className='flex justify-center relative'>
        <div className='my-20 mx-2 w-full md:w-2/3 xl:w-1/2'>
            <Container
                bgColor={'gray'}
            >
                <div className="flex flex-col p-2">
                    <h2 className="text-2xl uppercase font-bold text-sky-400">Nuestros productos</h2>
                    <div className="mt-4">
                        <h3 className="text-xl text-neutral-200 font-semibold">Guantes para exploración</h3>
                        <p className="text-neutral-300 font-medium mt-2">Optimizados | 240mm</p>
                        <p className="text-neutral-100 text-lg mt-1 text-justify">En sus presentaciones de látex y de nitrilo, puedes contar con una eficaz barrera biologica al usar cada par de nuestros guantes MaxSafe Innovation. Anatómicos, resistentes, ambidiestros, y con 24cm de largo para una protección más completa de tus manos.</p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p>Aqui habra una imagen</p>
                </div>
            </Container>

            <Container
                bgColor={'white'}
            >
                <div>
                    <h2 className='text-2xl font-semibold text-sky-600 uppercase mb-2'>Guantes de latex</h2>
                    <div className="flex flex-col border-b-2 pb-4">
                        <h3 className='text-xl font-medium uppercase text-neutral-400'>Lisos</h3>
                        <p className='text-lg font-semibold text-neutral-700'>Bajos en polvo</p>
                        <p className='text-neutral-700 text-justify'>100% de latex natural, bajos en polvo para el cuidado de tu piel y con un nivel estándar en proteína luego de largas jornadas de uso continuo.</p>
                    </div>

                    <div className="flex flex-col mt-4">
                        <h3 className='text-xl font-medium uppercase text-neutral-400'>Texturizados</h3>
                        <p className='text-lg font-semibold text-neutral-700'>Libres de polvo</p>
                        <p className='text-neutral-700 text-justify'>Totalmente texturizados para brindarte un plus de agarre, sin restarles la sensibilidad necesaria para una optima exploración. 100% de latex y libres de polvo</p>
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-semibold text-sky-600 uppercase mb-2'>Guantes de nitrilo</h2>
                    <div className="flex flex-col">
                        <h3 className='text-xl font-medium uppercase text-neutral-400'>Texturizados</h3>
                        <p className='text-lg font-semibold text-neutral-700'>Libres de polvo</p>
                        <p className='text-neutral-700 text-justify'>Fabricados a base de componentes de nitrilo, un material sintético muy resistente, que brinda al usuario una excelente cobertura de seguridad ante agentes biologicos, solventes, aceites y otros quimicos. Son la opcion ideal para quienes presentan alergia al látex natural y son libres de pólvo</p>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default InfoMain
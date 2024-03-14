import { useState } from "react";
import { Link } from "react-router-dom";
import ProductosInicio from '../components/ProductosInicio'
import MainCarrousel from "../components/MainCarrousel";
import imageOfrecemos from '../../public/img/mainImageGuantes.jpg';
import useShop from "../hooks/useShop";
import { formatearDinero } from "../helpers";
import ProductsList from "../components/ProductsList";

const Index = () => {
  const [knowMore, setKnowMore] = useState(false);
  const [cantidad, setCantidad] = useState(1);

  const { products } = useShop();

  console.log(products)

  return (
    <div>
      <MainCarrousel />

      <ProductosInicio />

      <div className="flex flex-col items-center px-5 sm:px-12 lg:px-0 pt-10 md:pb-10">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-5 w-full lg:w-2/3 gap-5">
          <div className="md:p-5 lg:col-span-3 flex flex-col justify-center">
            <h2 className="font-bold text-2xl text-sky-600 uppercase">¿Qué ofrecemos?</h2>
            <p className="text-justify text-lg leading-relaxed tracking-wide">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates error vitae, explicabo at illo beatae placeat harum quia tenetur dignissimos dolorum quisquam ducimus dolores nostrum optio aspernatur aliquid quo ullam.</p>
            <p className="text-justify text-lg leading-relaxed tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus iusto quas suscipit quis cumque, facere excepturi quam! Quae at molestias laborum animi vitae eaque, similique officiis magni in eum.</p>
          </div>

          <div className="flex px-10 pb-5 md:p-0 justify-center items-center lg:col-span-2 relative">
            <div className="sm:max-w-sm border fondoGrid p-5">
              <img src={imageOfrecemos} alt="Guantes" className="redondeoImagen" />
            </div>

            <div className="fondoGrid w-full h-full absolute -z-10"></div>
          </div>
        </div>
      </div>

      <ProductsList />
    </div>
  )
}

export default Index

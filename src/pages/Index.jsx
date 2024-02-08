import { useEffect } from "react";
import axios from "axios";
import ProductosInicio from '../components/ProductosInicio'
import MainCarrousel from "../components/MainCarrousel";
import InfoMain from "../components/InfoMain";

const Index = () => {
    return (
      <div>
        <div>
          <MainCarrousel />
        </div>

        <ProductosInicio />

        <InfoMain />
      </div>
    )
}

export default Index

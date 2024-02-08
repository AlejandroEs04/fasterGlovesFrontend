import { useEffect, useState } from "react"
import guanteImage from "../../public/img/guantes.png"
import useShop from "../hooks/useShop"
import ArticleMain from "./ArticleMain";

const ModelsInfo = () => {
  const [mainSection, setMainSection] = useState(null);
  const { articles } = useShop()

  useEffect(() => {
    if(articles.length >= 1) {
        const mainSectionArray = articles.filter(article => article.ID === 1);

        setMainSection(mainSectionArray[0])
    }
  }, [articles])

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col w-full lg:w-3/4">
        <h2 className="text-2xl uppercase font-bold text-sky-600">Nuestros productos</h2>
        <div className="mt-4">
          <h3 className="text-xl text-neutral-500 font-semibold">Guantes para exploración</h3>
          <p className="text-neutral-400 font-medium mt-2">Optimizados | 240mm</p>
          <p className="text-neutral-700 text-lg mt-1">En sus presentaciones de látex y de nitrilo, puedes contar con una eficaz barrera biologica al usar cada par de nuestros guantes MaxSafe Innovation. Anatómicos, resistentes, ambidiestros, y con 24cm de largo para una protección más completa de tus manos</p>
        </div>
      </div>
    </div>
  )
}

export default ModelsInfo

import { useParams } from "react-router-dom"

const Buy = () => {
    const params = useParams();
    const { id } = params

    console.log(id)

    return (
        <div>Buy</div>
    )
}

export default Buy
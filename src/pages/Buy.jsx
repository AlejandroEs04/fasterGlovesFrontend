import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const Buy = () => {
    const [buy, setBuy] = useState({});
    const params = useParams();
    const { id } = params

    const getBuy = async() => {
        const token = localStorage.getItem('token');
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/api/buy/find/${id}`, config);

            console.log(data);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getBuy()
    }, [])

    return (
        <div>Buy</div>
    )
}

export default Buy
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; 

const AdminContext = createContext();

function Product(name, price, amount, typeID, description, imageURL, xs, s, m, l, xl) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.typeID = typeID;
    this.description = description;
    this.imageURL = imageURL;
    this.xs = xs;
    this.s = s;
    this.m = m;
    this.l = l;
    this.xl = xl;
}

const AdminProvider = ({children}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [typeID, setTypeID] = useState(0)
    const [description, setDescription] = useState("");
    const [imagenUrl, setImagenUrl] = useState(null);
    const [XS, setXS] = useState(true);
    const [S, setS] = useState(true);
    const [M, setM] = useState(true);
    const [L, setL] = useState(true);
    const [XL, setXL] = useState(true);
    const [buys, setBuys] = useState([]);

    useEffect(() => {
        handleGetAllBuy()
    }, [])

    const handleSaveProduct = async(e) => {
        const product = new Product(name, price, amount, typeID, description, imagenUrl, XS, S, M, L, XL);
        
        try {
            const res = await axios.post("http://localhost:4000/api/products", {
                product
            })

            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetAllBuy = async() => {
        const token = localStorage.getItem('token');
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/api/buy/admin`, config)

            setBuys(data.buys)
        } catch (error) {
            console.log(error)
        }
    }

    const handleOnTheWay = async(buy) => {
        buy.delivery[0].onTheWay = true

        const buysUpdate = buys?.filter(buyApi => buyApi.ID === buy.ID ? buy : buyApi)

        setBuys(buysUpdate)

        const token = localStorage.getItem('token');
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/api/buy/update/${buy.ID}`, {
                onTheWay: true
            }, config)

            toast.success(data.msg, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelivered = async(buy) => {
        buy.delivery[0].delivered = true

        const buysUpdate = buys?.filter(buyApi => buyApi.ID === buy.ID ? buy : buyApi)

        setBuys(buysUpdate)

        const token = localStorage.getItem('token');
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/api/buy/update/${buy.ID}`, {
                delivered: true
            }, config)

            toast.success(data.msg, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AdminContext.Provider
            value={{
                setName,
                name, 
                setPrice,
                price,
                setAmount,
                amount,
                setDescription,
                description, 
                setTypeID,
                typeID,
                setImagenUrl, 
                imagenUrl,
                setXS,
                XS,
                setS,
                S, 
                setM, 
                M, 
                setL, 
                L, 
                setXL, 
                XL,
                handleSaveProduct,
                handleGetAllBuy,
                buys,
                handleOnTheWay,
                handleDelivered
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}

export {
    AdminProvider,
    Product
}

export default AdminContext
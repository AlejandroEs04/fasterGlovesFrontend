import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; 

const AdminContext = createContext();

function Product(ID, name, price, amount, typeID, description, imageURL, xs, s, m, l, xl) {
    this.ID = ID
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

function Model(name, description) {
    this.name = name;
    this.description = description
}

const AdminProvider = ({children}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [typeID, setTypeID] = useState(0)
    const [description, setDescription] = useState("");
    const [imagenUrl, setImagenUrl] = useState(null);
    const [XS, setXS] = useState(false);
    const [S, setS] = useState(false);
    const [M, setM] = useState(false);
    const [L, setL] = useState(false);
    const [XL, setXL] = useState(false);
    const [buys, setBuys] = useState([]);

    const [nameModel, setNameModel] = useState('')
    const [descriptionModel, setDescriptionModel] = useState('')
    const [productModal, setProductModal] = useState({});

    useEffect(() => {
        handleGetAllBuy()
    }, [])

    const handleSaveProduct = async(id) => {
        const product = new Product(id, name, price, amount, typeID, description, imagenUrl, XS, S, M, L, XL);

        const token = localStorage.getItem('token');
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        if(id) {
            try {
                const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/products/${id}/update`, {
                    product
                }, config)

                toast.success(data.msg, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            } catch (error) {
                
            }
        } else {
            try {
                const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/products`, {
                    product
                })

                toast.success(data.msg, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            } catch (error) {
                console.log(error)
            }
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

    const handleSaveModel = async(e) => {
        const model = new Model(nameModel, descriptionModel);

        const token = localStorage.getItem('token');
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/types`, {
                model
            }, config)

            toast.success("Cuenta creada correctamente", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleFillModal = async(products, id, sizes) => {
        const product = await products?.filter(product => product.ID === id)
        setProductModal(product[0])

        const sizesNew = await sizes?.map(size => {
            const answer = product[0]?.detProductSize?.filter(sizeProduct => sizeProduct.sizeID === size.ID)

            return answer[0]
        })

        sizesNew.map(size => {
            if(size) {
                switch (size.sizeID) {
                    case 1:
                        setXS(true)
                        break;
                    case 2:
                        setS(true)
                        break;
                    case 3:
                        setM(true)
                        break;
                    case 4:
                        setL(true)
                        break;
                    case 5:
                        setXL(true)
                        break;
                    
                    default: 
                        console.log('nada')
                        break;
                }
            }
        })
    }

    return (
        <AdminContext.Provider
            value={{    
                handleSaveModel,
                nameModel, 
                setNameModel,
                descriptionModel, 
                setDescriptionModel,
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
                handleDelivered,
                handleFillModal, 
                productModal,
                setProductModal
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
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const RutaProtegida = () => {
    const { auth, loading } = useAuth();

    if(loading) return <Loader />
    
    return (
        <>
            {auth.ID ? (
                <main className='bg-neutral-100'>
                    <Header />

                    <div>
                        <Outlet />
                    </div>

                    <Footer />
            
                    <ToastContainer />
                </main>
            ) : <Navigate to="/login" />}
        </>
    )
}

export default RutaProtegida

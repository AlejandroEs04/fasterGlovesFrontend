import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const MainLayout = () => {
  return (
    <>
      <main className='bg-white'>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />

        <ToastContainer />
      </main>
    </> 
  )
}

export default MainLayout

import { Outlet, Navigate } from 'react-router-dom'
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import AdminHeader from '../components/AdminHeader'
import { AdminProvider } from '../context/AdminProvider'

const AdminLayout = () => {
  const { auth, loading } = useAuth();

  if(loading) return <Loader />

  return (
    <>
      {auth.ID && auth.admin ? (
        <AdminProvider>
          <main className='bg-neutral-100'>
            <AdminHeader />
            <div>
              <Outlet />
            </div>
          </main>
        </AdminProvider> 
      ) : <Navigate to="/" />}
    </>
  )
}

export default AdminLayout

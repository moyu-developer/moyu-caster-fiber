import { Navigate, Outlet } from 'umi'
 
export default () => {

  const token = localStorage.getItem(`token`)

  return (
    token ? <Outlet /> : <Navigate to="/login" />
  )
}
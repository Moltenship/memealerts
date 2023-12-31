import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <div className="container py-8 flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

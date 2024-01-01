import { NavLink } from 'react-router-dom'
import { ThemeSwitch } from './ThemeSwitch'

export const Header = () => {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-6 py-2">
        <h1 className="text-3xl">memealerts</h1>
        <nav className="flex gap-2">
          <NavLink to="/last-alerts/uselessmouth">last</NavLink>
          <NavLink to="/user-alerts/uselessmouth">search</NavLink>
          <NavLink to="/featured">featured</NavLink>
        </nav>
        <ThemeSwitch></ThemeSwitch>
      </div>
    </header>
  )
}

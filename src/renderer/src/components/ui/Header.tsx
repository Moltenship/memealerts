import { NavLink } from 'react-router-dom'
import { ThemeSwitch } from './ThemeSwitch'

export const Header = () => {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-6 py-2">
        <h1 className="text-3xl">
          <NavLink to="/">memealerts</NavLink>
        </h1>
        <ThemeSwitch></ThemeSwitch>
      </div>
    </header>
  )
}

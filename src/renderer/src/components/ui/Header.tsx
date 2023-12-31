import { ThemeSwitch } from './ThemeSwitch'

export const Header = () => {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-6 py-2">
        <h1>Meme alerts</h1>
        <ThemeSwitch></ThemeSwitch>
      </div>
    </header>
  )
}

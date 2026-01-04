import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/theme/themeContext"

export function NavbarThemeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        inline-flex h-9 w-9 items-center justify-center
        rounded-full border-0
        bg-background text-foreground
        cursor-pointer
       ${isDark ?  `hover:bg-gray-600` : `hover:bg-gray-400`} hover:text-accent-foreground hover:scale-105
        transition-all duration-200 py-0
      `}
    >
      {isDark ? <Sun className="text-yellow-400" size={18} /> : <Moon size={18} />}
    </button>
  )
}

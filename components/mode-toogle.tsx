'use client';
import { useTheme } from 'next-themes'

export default function ColorModeSwitcher() {
  // useTheme hook provides the current theme and a function to change it
  const { theme, setTheme } = useTheme()
  
  return (
    <button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle dark mode"
    >
      {/* Display different text based on current theme */}
      {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    </button>
  )
}

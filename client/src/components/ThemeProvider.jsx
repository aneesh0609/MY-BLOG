import { useSelector } from "react-redux"

export default function ThemeProvider({children}) {
  const {theme} = useSelector(state => state.theme)
  return (
     <div className={theme}>
      <div className="bg-white text-gray-600 dark:text-white dark:bg-[rgb(27,26,26)] min-h-screen">
      {children}
      </div>     
     </div>
  )
}

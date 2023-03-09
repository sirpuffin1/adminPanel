import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme.js"
import { useSelector } from "react-redux"
import { useMemo } from "react"

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
      
    </div>
  )
}

export default App
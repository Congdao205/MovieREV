import { BrowserRouter as Router } from "react-router"
import RouterConfig from "./Routers/RouterConfig"
import { TrailerProvider } from "./Contexts/TrailerContext"

function App() {
  return (
    <>
      <TrailerProvider>
        <Router>
          <RouterConfig></RouterConfig>
        </Router>
      </TrailerProvider>
    </>
  )
}

export default App

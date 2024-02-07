import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAllIdeasRoute, getViewIdeaRoute, viewIdeaRouteParams } from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'
import { ViewIdeaPage } from './pages/IdeaPage'

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllIdeasRoute()} element={<AllIdeasPage />}></Route>
          <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage />}></Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App

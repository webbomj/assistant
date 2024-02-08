import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAllIdeasRoute, getNewIdeaRoute, getViewIdeaRoute, viewIdeaRouteParams } from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'
import { ViewIdeaPage } from './pages/IdeaPage'
import './styles/global.scss'
import { NewIdeaPage } from './pages/NewIdeaPage'

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllIdeasRoute()} element={<AllIdeasPage />}></Route>
          <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage />}></Route>
          <Route path={getNewIdeaRoute()} element={<NewIdeaPage />}></Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App

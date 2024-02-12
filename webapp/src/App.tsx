import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { getAllIdeasRoute, getNewIdeaRoute, getSignUpRoute, getViewIdeaRoute, viewIdeaRouteParams } from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'
import { ViewIdeaPage } from './pages/IdeaPage'
import './styles/global.scss'
import { NewIdeaPage } from './pages/NewIdeaPage'
import { SignUpPage } from './pages/SignUp'

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getSignUpRoute()} element={<SignUpPage />}></Route>
            <Route path={getAllIdeasRoute()} element={<AllIdeasPage />}></Route>
            <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage />}></Route>
            <Route path={getNewIdeaRoute()} element={<NewIdeaPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App

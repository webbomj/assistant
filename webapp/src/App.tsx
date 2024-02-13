import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import {
  editIdeaRouteParams,
  getAllIdeasRoute,
  getEditIdeaRoute,
  getNewIdeaRoute,
  getSignInRoute,
  getSignOutRoute,
  getSignUpRoute,
  getViewIdeaRoute,
  viewIdeaRouteParams,
} from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'
import { EditIdeaPage } from './pages/EditIdeaPage'
import { ViewIdeaPage } from './pages/IdeaPage'
import './styles/global.scss'
import { NewIdeaPage } from './pages/NewIdeaPage'
import { SignInPage } from './pages/SignIn'
import { SignOutPage } from './pages/SignOutPage'
import { SignUpPage } from './pages/SignUp'

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getSignOutRoute()} element={<SignOutPage />}></Route>
          <Route element={<Layout />}>
            <Route path={getSignUpRoute()} element={<SignUpPage />}></Route>
            <Route path={getSignInRoute()} element={<SignInPage />}></Route>
            <Route path={getAllIdeasRoute()} element={<AllIdeasPage />}></Route>
            <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage />}></Route>
            <Route path={getNewIdeaRoute()} element={<NewIdeaPage />}></Route>
            <Route path={getEditIdeaRoute(editIdeaRouteParams)} element={<EditIdeaPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App

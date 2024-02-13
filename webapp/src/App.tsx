import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AppContextProvider } from './lib/ctx'
import {
  editIdeaRouteParams,
  getAllIdeasRoute,
  getEditIdeaRoute,
  getEditProfileRoute,
  getNewIdeaRoute,
  getSignInRoute,
  getSignOutRoute,
  getSignUpRoute,
  getViewIdeaRoute,
  viewIdeaRouteParams,
} from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { EditProfilePage } from './pages/auth/EditProfilePage'
import { SignInPage } from './pages/auth/SignIn'
import { SignOutPage } from './pages/auth/SignOutPage'
import { SignUpPage } from './pages/auth/SignUp'
import { AllIdeasPage } from './pages/ideas/AllIdeasPage'
import { EditIdeaPage } from './pages/ideas/EditIdeaPage'
import { ViewIdeaPage } from './pages/ideas/IdeaPage'
import './styles/global.scss'
import { NewIdeaPage } from './pages/ideas/NewIdeaPage'
import { NotFoundPage } from './pages/other/NotFoundPage'

function App() {
  return (
    <TrpcProvider>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={getSignOutRoute()} element={<SignOutPage />}></Route>
            <Route element={<Layout />}>
              <Route path={getSignUpRoute()} element={<SignUpPage />}></Route>
              <Route path={getSignInRoute()} element={<SignInPage />}></Route>
              <Route path={getAllIdeasRoute()} element={<AllIdeasPage />}></Route>
              <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage />}></Route>
              <Route path={getNewIdeaRoute()} element={<NewIdeaPage />}></Route>
              <Route path={getEditProfileRoute()} element={<EditProfilePage />} />
              <Route path={getEditIdeaRoute(editIdeaRouteParams)} element={<EditIdeaPage />}></Route>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </TrpcProvider>
  )
}

export default App

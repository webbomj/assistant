import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'
import { ViewIdeaPage } from './pages/IdeaPage'

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/ideas" element={<AllIdeasPage />}></Route>
          <Route path="/ideas/:ideaNick" element={<ViewIdeaPage />}></Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App

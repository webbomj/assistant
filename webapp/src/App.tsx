import './App.css'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'

const s = '4'

function App() {
  return (
    <TrpcProvider>
      <AllIdeasPage></AllIdeasPage>
    </TrpcProvider>
  )
}

export default App

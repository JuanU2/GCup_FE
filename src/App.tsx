import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Registration from './pages/Registration'
import RaceOverview from './pages/RaceOverview'
import Admin from './pages/Admin'
import NewRace from './pages/NewRace'
import { AuthProvider } from './main'
import RaceDetail from './pages/RaceDetail'
import SuccessCreated from './pages/SuccessCreated'
import ErrorPage from './pages/ErrorPage'
import Print from './pages/Print'
import YearSelect from './pages/YearSelect'
import NumberPrint from './pages/NumberPrint'
import StartListPrint from './pages/StartListPrint'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <div className='bg-gray-300'>
    <AuthProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registracia" element={<RaceOverview />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/novy-pretek" element={
        <ProtectedRoute>
            <NewRace />
        </ProtectedRoute>
        } />
        <Route path="/registracia/:year" element={<Registration />} />
        <Route path="/pretek/:year" element={<RaceDetail />} />
        <Route path="/registracia/:year/cyklista/:number" element={<SuccessCreated />} />
        <Route path="/registracia/error" element={<ErrorPage />} />
        <Route path="/tlac" element={
        <ProtectedRoute>
            <Print/>
        </ProtectedRoute>
        }/>
        <Route path="/tlac/:document" element={
        <ProtectedRoute>
            <YearSelect/>
        </ProtectedRoute>
        }/>
        <Route path="/tlac/cislo/:year" element={<ProtectedRoute><NumberPrint/></ProtectedRoute>}/>
        <Route path="/tlac/listina/:year" element={<StartListPrint/>}/>

    </Routes>
    </AuthProvider>
    </div>
  )
}

export default App

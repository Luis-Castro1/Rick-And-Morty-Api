import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage.jsx'
import CharacterPage from './pages/CharacterPage.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='character/:id' element={<CharacterPage />}>
              <Route path='*' element={<Navigate to='/' />} />
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css';
import {useState} from "react"
import axios from 'axios'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { NavBar } from './components/NavBar';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {
  const client = new QueryClient()

  
  return(
    <div className ="App">
      <QueryClientProvider client={client}>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<h1>ERROR 404 PAGE NOT FOUND</h1>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App;

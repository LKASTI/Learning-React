import './App.css';
import {useState} from "react"
import axios from 'axios'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { NavBar } from './components/NavBar';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

//query is R from CRUD, mutation is CUD from CRUD
function App() {//query is getting data, mutation is changing data
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }})
  
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

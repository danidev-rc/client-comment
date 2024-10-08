import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CommentsPage from './pages/CommentsPage'
import CommentFormPage from './pages/CommentFormPage'

import ProtectedRoute from './ProtectedRoute'
import { CommentProvider } from './context/CommentContext'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <AuthProvider>
        <CommentProvider>
          <BrowserRouter>
            <Navbar />
            <main className='container mx-auto py-20 px-20'>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path='/comments' element={<CommentsPage />} />
                  <Route path='/add-comment' element={<CommentFormPage />} />
                  <Route path='/comments/:id' element={<CommentFormPage />} />
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </CommentProvider>
      </AuthProvider>
    </>
  )
}

export default App

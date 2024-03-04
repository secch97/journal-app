import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, SignUpPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginPage></LoginPage>}></Route>
        <Route path="signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/*" element={<Navigate to="/auth/login"></Navigate>}></Route>
    </Routes>
  )
}

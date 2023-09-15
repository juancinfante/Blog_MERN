import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../pages/HomeScreen"
import { AdminScreen } from "../pages/AdminScreen"
import { ArticuloPage } from "../pages/ArticuloPage"
import { LoginScreen } from "../pages/LoginScreen"
import { RegisterScreen } from "../pages/RegisterScreen"

export const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<HomeScreen/>} />
                    <Route path="/admin" element={<AdminScreen/>} />
                    <Route path="/articulo/:id" element={<ArticuloPage/>} />
                    <Route path="/login" element={<LoginScreen/>} />
                    <Route path="/register" element={<RegisterScreen/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

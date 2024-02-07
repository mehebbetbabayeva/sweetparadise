import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import RegisterPage from "../pages/Register"
import LoginPage from "../pages/Login"
import NotFound from "../pages/NotFound"

import Contact from "../pages/Contact"

import About from "../pages/About"
import Products from "../pages/AllProducts"



const WebRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qeydiyyat" element={<RegisterPage />} />
            <Route path="/giriş" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/əlaqə" element={<Contact/>} />

            <Route path="/haqqımızda" element={<About />} />
            <Route path="/kataloq" element={<Products/>} />

        </Routes>
    )
}

export default WebRouting
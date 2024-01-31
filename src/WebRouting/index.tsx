import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import RegisterPage from "../pages/Register"
import LoginPage from "../pages/Login"
import NotFound from "../pages/NotFound"


const WebRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qeydiyyat" element={<RegisterPage />} />
            <Route path="/giriş" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default WebRouting
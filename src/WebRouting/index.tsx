import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import RegisterPage from "../pages/Register"
import LoginPage from "../pages/Login"
import NotFound from "../pages/NotFound"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Products from "../pages/AllProducts"
import ProductDetail from "../components/productDetail"
import Basket from "../pages/Basket"



const WebRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qeydiyyat" element={<RegisterPage />} />
            <Route path="/giriş" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/əlaqə" element={<Contact />} />
            <Route path="/haqqımızda" element={<About />} />
            <Route path="/kataloq" element={<Products />} />
            <Route path="/kataloq/:title" element={<ProductDetail />} />
            <Route path="/səbət" element={<Basket />} />
            <Route path="/sifariş-et" element={<Basket />} />

        </Routes>
    )
}

export default WebRouting
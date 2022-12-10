import { Route, Routes } from "react-router-dom"
import App from "./App"
import { Login } from "./Pages/Login"
import { ProductDetail } from "./Pages/ProductDetail"
import { SignUp } from "./Pages/SignUp"



export const AllRoutes=()=>{
    return <>
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/productdetail" element={<ProductDetail/>}/>
    </Routes>
    </>
}
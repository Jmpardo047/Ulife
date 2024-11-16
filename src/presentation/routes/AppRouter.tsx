import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { Profile } from "../pages/ProfilePage";

export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path='/'element={<Navigate to="/Home" />}/>
            </Routes>
        </>
    )
}
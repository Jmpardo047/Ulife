import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { Profile } from "../pages/ProfilePage";
import { Friends } from "../pages/FriendsPage";

export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="friends" element={<Friends/>}/>
                <Route path='/'element={<Navigate to="/home" />}/>
            </Routes>
        </>
    )
}
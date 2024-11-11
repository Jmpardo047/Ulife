import { useState } from "react";
import { MainContent } from "../components/MainContentComponent";
import { NavComponent } from "../components/NavComponent";
import "../themes/index.css"
import { ProfilePanel } from "../components/ProfileMenu/ProfilePanelComponent";
export const Home = () =>{
    const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

    const toogleProfileMenu = () => {
        setIsProfileMenuVisible(!isProfileMenuVisible);
    }

    return (
        <>
            <NavComponent profileClick={toogleProfileMenu}/>
            {isProfileMenuVisible  && <ProfilePanel userPhoto="https://s3.amazonaws.com/prod-wp-tunota/wp-content/uploads/2024/11/canguro-foto-en-el-espejo.jpg" userName="John Doe"/>}
            <MainContent/>
        </>
    )
};
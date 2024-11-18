import { useState } from "react";
import { NavComponent } from "../components/NavComponent";
import "../themes/index.css"
import { ProfilePanel } from "../components/ProfileMenu/ProfilePanelComponent";
import { AsideRight } from "../components/AsideRight/AsideRightComponent";
import { CentralBodyFriends } from "../components/CentralFeed/CentralBodyFriendsComponent";
import { LeftFriendsMenu } from "../components/AsideLeft/AsideLeftFriends/LeftFriendsMenuComponent";

export const Friends = () =>{
    const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

    const toogleProfileMenu = () => {
        setIsProfileMenuVisible(!isProfileMenuVisible);
    }

    return (
        <>
            <NavComponent profileClick={toogleProfileMenu}/>
            {isProfileMenuVisible  && <ProfilePanel userPhoto="https://s3.amazonaws.com/prod-wp-tunota/wp-content/uploads/2024/11/canguro-foto-en-el-espejo.jpg" userName="John Doe"/>}
            <div className="main-content">
                <LeftFriendsMenu/>
                <CentralBodyFriends/>
                <AsideRight/>
            </div>
        </>
    )
};
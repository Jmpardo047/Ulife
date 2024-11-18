import { ArrowRightCircleIcon, HomeIcon, ListBulletIcon, UsersIcon } from "@heroicons/react/24/outline"
import { LeftMenuItem } from "../LeftMenuItemComponent"
import { useState } from "react"

export const LeftFriendsMenu = () => {

    const [selectedItem, setSelectedItem] = useState("")

    const handleSelect = (name:string) =>{
        setSelectedItem(name)
    }

    return (
        <>
            <div className="w-full h-fit bg-surface rounded-xl shadow-lg flex items-start justify-center pt-4 pb-4 pl-3 pr-3">
                <div className="flex flex-col w-full h-auto">
                    <LeftMenuItem 
                        logo={<HomeIcon className="w-8 h-8"/>} 
                        title="Home"
                        isSelected = {selectedItem == "Home"}
                        onClick = {() => handleSelect('Home')}  
                    />

                    <LeftMenuItem 
                        logo={<ArrowRightCircleIcon className="w-8 h-8"/>} 
                        title="Friend Requests"
                        isSelected = {selectedItem == "Profile"}
                        onClick = {() => handleSelect('Profile')}  
                    />

                    <LeftMenuItem 
                        logo={<UsersIcon className="w-8 h-8"/>} 
                        title="All friends"
                        isSelected = {selectedItem == "Saved"}
                        onClick = {() => handleSelect('Saved')} 
                    />
                    <LeftMenuItem 
                        logo={<ListBulletIcon className="w-8 h-8"/>} 
                        title="Customized Lists"
                        isSelected = {selectedItem == "Events"}
                        onClick = {() => handleSelect('Events')} 
                    />
                </div>
            </div>
        </>
    )
}
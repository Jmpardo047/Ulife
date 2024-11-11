import { BookmarkIcon, CalendarIcon, Cog6ToothIcon, HomeIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline"
import { LeftMenuItem } from "./LeftMenuItemComponent"
import { useState } from "react"

export const LeftMenu = () =>{
    const [selectedItem, setSelectedItem] = useState("")

    const handleSelect = (name:string) =>{
        setSelectedItem(name)
    }

    return (
        <div className="flex flex-col w-full h-auto">
            <LeftMenuItem 
                logo={<HomeIcon className="w-8 h-8"/>} 
                title="Home"
                isSelected = {selectedItem == "Home"}
                onClick = {() => handleSelect('Home')}  
            />

            <LeftMenuItem 
                logo={<UserIcon className="w-8 h-8"/>} 
                title="Groups"
                isSelected = {selectedItem == "Profile"}
                onClick = {() => handleSelect('Profile')}  
            />

            <LeftMenuItem 
                logo={<UsersIcon className="w-8 h-8"/>} 
                title="Friends"
                isSelected = {selectedItem == "Friends"}
                onClick = {() => handleSelect('Friends')} 
            />

            <LeftMenuItem 
                logo={<BookmarkIcon className="w-8 h-8"/>} 
                title="Saved"
                isSelected = {selectedItem == "Saved"}
                onClick = {() => handleSelect('Saved')} 
            />
            <LeftMenuItem 
                logo={<CalendarIcon className="w-8 h-8"/>} 
                title="Events"
                isSelected = {selectedItem == "Events"}
                onClick = {() => handleSelect('Events')} 
            />
            <LeftMenuItem 
                logo={<Cog6ToothIcon className="w-8 h-8"/>} 
                title="Settings"
                isSelected = {selectedItem == "Settings"}
                onClick = {() => handleSelect('Settings')} 
            />
        </div>
    )
}
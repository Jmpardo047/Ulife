import { Link } from "react-router-dom"
import { Bars4Icon, BellIcon, ChatBubbleOvalLeftEllipsisIcon, HomeIcon, MagnifyingGlassIcon, UserIcon, UsersIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import { useState } from "react";

export interface Props {
    profileClick: () => void;
}

export const NavComponent = ({profileClick}:Props) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState("");

    const handleMouseEnter = (icon:string) => {
      setIsTooltipVisible(icon);
    };
  
    const handleMouseLeave = () => {
      setIsTooltipVisible("");
    };

    const handleMenuOpen = () => {
        setIsTooltipVisible("");
        profileClick()
    }

    return (
        <>
            <nav className="top-00 z-50 bg-white dark:bg-surface shadow-xl nav ">
                <Link className="link-button" to="/">
                    <h1 className="nav-title">Ulife</h1>
                </Link>
                <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
                    <div className="w-full relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full shadow-lg py-2 pl-10 pr-4 rounded-full bg-gray-100 dark:bg-background focus:outline-none dark:text-gray-200"
                        />
                        <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
                <div className="flex flex-row gap-7">
                    <HomeIcon className="cursor-pointer drop-shadow-md h-7 w-7 text-white-500"/>
                    <UsersIcon className="cursor-pointer drop-shadow-md h-7 w-7 text-white-500"/>
                    <VideoCameraIcon className="cursor-pointer drop-shadow-md h-7 w-7 text-white-500"/>
                    <MagnifyingGlassIcon className="cursor-pointer drop-shadow-md h-7 w-7 text-white-500" />
                </div>
                <div className="flex flex-row-reverse gap-3 ml-auto mr-8 relative" onClick={handleMenuOpen}>
                    <div onMouseEnter={() => handleMouseEnter("profile")} onMouseLeave={() => handleMouseLeave()} className="rounded-full h-14 w-14 bg-background flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-700">
                        <UserIcon className="cursor-pointer drop-shadow-md h-8 w-8 text-white-500" />
                        {isTooltipVisible == "profile" && 
                            <div className="py-0.5 px-2 bg-gray-400 absolute top-14 mt-1 rounded-lg">
                                <span className="text-xs text-black font-medium">Profile</span>
                            </div>
                        }
                    </div>
                    <div onMouseEnter={() => handleMouseEnter("notifications")} onMouseLeave={handleMouseLeave} className="rounded-full h-14 w-14 bg-background flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-700">
                        <BellIcon className="cursor-pointer drop-shadow-md h-8 w-8 text-white-500" />
                        {isTooltipVisible == "notifications" && 
                            <div className="py-0.5 px-2 bg-gray-400 absolute top-14 mt-1 rounded-lg">
                                <span className="text-xs text-black font-medium">Notifications</span>
                            </div>
                        }
                    </div>
                    <div onMouseEnter={() => handleMouseEnter("messages")} onMouseLeave={() => handleMouseLeave()} className="rounded-full h-14 w-14 bg-background flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-700">
                        <ChatBubbleOvalLeftEllipsisIcon className="cursor-pointer drop-shadow-md h-8 w-8 text-white-500" />
                        {isTooltipVisible == "messages" && 
                            <div className="py-0.5 px-2 bg-gray-400 absolute top-14 mt-1 rounded-lg">
                                <span className="text-xs text-black font-medium">Messages</span>
                            </div>
                        }
                    </div>
                    <div onMouseEnter={() => handleMouseEnter("menu")} onMouseLeave={() => handleMouseLeave()} className="rounded-full h-14 w-14 bg-background flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-700">
                        <Bars4Icon className="cursor-pointer drop-shadow-md h-8 w-8 text-white-500" />
                        {isTooltipVisible == "menu" && 
                            <div className="py-0.5 px-2 bg-gray-400 absolute top-14 mt-1 rounded-lg">
                                <span className="text-xs text-black font-medium">Menu</span>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}
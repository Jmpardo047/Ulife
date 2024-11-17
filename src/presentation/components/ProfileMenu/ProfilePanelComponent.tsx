import { ArrowRightStartOnRectangleIcon, PlusCircleIcon, QuestionMarkCircleIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/24/outline";
import { MenuItem } from "./MenuItemComponent";
import { useNavigate } from "react-router-dom";

export interface Props {
    userPhoto:string;
    userName:string;
}

export const ProfilePanel = ({userPhoto, userName}:Props) => {
    const navigate = useNavigate()
    const handleNavigation = () =>{
        navigate('/profile')
    }
    return (
        <>
            <div className="absolute top-20 mt-4 right-4 w-96 h-auto bg-surface p-4 rounded-lg shadow-xl flex flex-col gap-8 z-10">
                <div className="flex flex-col bg-surface shadow-xl rounded-lg p-3 px-4 w-full gap-3">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src={userPhoto} alt="" className="w-full h-full object-contain"/>
                        </div>
                        <span className="font-semibold">{userName}</span>
                    </div>
                    <div className=" my-1 opacity-50">
                        <hr/>
                    </div>
                    <div onClick={handleNavigation} className="w-full bg-coverSurface rounded-lg py-2.5 cursor-pointer hover:bg-coverSurfaceHover">
                            <p>View Profile</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <MenuItem logo={<PlusCircleIcon className="w-7 h-7"/>} title="log in New Profile"/>
                    <MenuItem logo={<UsersIcon className="w-7 h-7"/>} title="See all profiles"/>
                    <MenuItem logo={<UserPlusIcon className="w-7 h-7"/>} title="Sign up"/> 
                    <MenuItem logo={<QuestionMarkCircleIcon className="w-7 h-7"/>} title="help and support"/>
                    <MenuItem logo={<ArrowRightStartOnRectangleIcon className="w-7 h-7"/>} title="Log out"/>
                </div>
            </div>
        </>
    )
}
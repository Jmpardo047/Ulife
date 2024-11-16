import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import { ButtonProfile } from "./ButtonProfileComponent";

export interface Props{
    userPhoto: string;
    userName: string;
    friends: string;
}

export const InfoBanner = ({userPhoto, userName, friends}:Props) => {
    return (
        <>
            <div className="w-full flex flex-col">
                <div className="bg-coverSurface w-full h-96 rounded-b-lg shadow-xl">
                    <img src="" alt="" />
                    <div>
                    </div> 
                </div>

                <div className="w-full flex flex-row px-8 justify-between">
                    <div className="flex flex-row relative">
                        <div className="w-40 h-40 rounded-full overflow-hidden absolute -top-12">
                            <img src={userPhoto} alt="" className="w-full h-full object-contain"/>
                        </div>
                        <div className="flex flex-col ml-2 items-start mr-auto pl-40 mt-3">
                            <h3 className="font-bold text-3xl">{userName}</h3>
                            <h2 className="font-light ">{friends}</h2>
                        </div>
                    </div>
                    <div className="flex flex-row ml-auto mr-8 items-end gap-5">
                        <ButtonProfile icon={<PlusIcon className="w-5 h-5"/>} title="Create new post" color="bg-yellow-600"/>
                        <ButtonProfile icon={<PencilSquareIcon className="w-5 h-5"/>} title="Edit Profile Info" color="bg-coverSurface"/>
                    </div>
                </div>
            </div>
        </>
    )
}
import { useState } from "react"

export interface Props {
    TogglePanel : (selection:string) => void;
}

export const ProfileContentNav = ({TogglePanel}:Props) => {
    const [selected, setSelected] = useState("myposts")

    const toggleSelection = (item:string):void => {
        setSelected(item)
        TogglePanel(item)
    }

    return (
        <>
            <div className="flex flex-row w-full justify-around">
                <div className="flex flex-col w-full pt-3 gap-2 cursor-pointer rounded-b-lg hover:bg-gray-200 hover:bg-opacity-30" onClick={() =>toggleSelection("myposts")}>
                    <p className="transition-transform transform hover:scale-110">My Posts</p>
                    <div className={`w-full h-1 bg-yellow-600 rounded-lg transform transition-all duration-200 ${
                        selected === "myposts" ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}></div>
                </div>

                <div className="flex flex-col w-full pt-3 gap-2 cursor-pointer rounded-b-lg hover:bg-gray-200 hover:bg-opacity-30" onClick={() =>toggleSelection("subjects")}>
                    <p className="transition-transform transform hover:scale-110">My Subjects</p>
                    <div className={`w-full h-1 bg-yellow-600 rounded-lg transform transition-all duration-200 ${
                        selected === "subjects" ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}></div>
                </div>

                <div className="flex flex-col w-full pt-3 gap-2 cursor-pointer rounded-b-lg hover:bg-gray-200 hover:bg-opacity-30" onClick={() =>toggleSelection("friends")}>
                    <p className="transition-transform transform hover:scale-110">Friends</p>
                    <div className={`w-full h-1 bg-yellow-600 rounded-lg transform transition-all duration-200 ${
                        selected === "friends" ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}></div>
                </div>

                <div className="flex flex-col w-full pt-3 gap-2 cursor-pointer rounded-b-lg hover:bg-gray-200 hover:bg-opacity-30" onClick={() =>toggleSelection("tagged")}>
                    <p className="transition-transform transform hover:scale-110">Tagged</p>
                    <div className={`w-full h-1 bg-yellow-600 rounded-lg transform transition-all duration-200 ${
                        selected === "tagged" ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}></div>
                </div>
            </div>
        </>
    )
}
import { useState } from "react"
import { ProfileContentNav } from "./ProfileContentNavComponent"
import { MyPosts } from "./ContentPanels/MyPostsComponent"
import { MySubjects } from "./ContentPanels/MysubjectsComponent"

export const ProfilePanelContent = () => {
    const [panel, setPanel] = useState("myposts")

    const toggleSelection = (item:string):void => {
        setPanel(item)
    }
    
    const renderPanel = (panel:string):JSX.Element | null => {
        let render:JSX.Element | null = null;

        switch(panel) {
            case "myposts":
                render = <MyPosts/>;
                break;
            case "subjects":
                render = <MySubjects/>;
                break;
        }

        return render
    }

    return (
        <>
            <div className="flex flex-col gap-4 w-full h-fit rounded-lg px-4 items-start">
                    <ProfileContentNav TogglePanel={toggleSelection}/>
                    {renderPanel(panel)}
            </div>
        </>
    )
}
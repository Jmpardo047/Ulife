import { SuggestedFriends } from "./SuggestedFriendsComponent";
import { SuggestedGroups } from "./SuggestedGroupsComponent";


export const AsideRight = () => {
    return (
        <>
            <div className="flex flex-col w-full h-fit gap-8 rounded-xl shadow-lg rounded-lg items-start justify-start ">
                <SuggestedFriends/>
                <SuggestedGroups/>
            </div>
        </>
    )
};
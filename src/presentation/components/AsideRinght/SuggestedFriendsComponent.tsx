import { UserCircleIcon } from "@heroicons/react/24/outline"
import { FriendItem } from "./FriendItemComponent"

export const SuggestedFriends = () => {
    return(
        <div className="flex flex-col max-h-1/3 w-full overflow-y-auto p-2 bg-surface rounded-xl sroll scrollbar-short shadow-lg">
            <h2 className="text-lg font-bold text-text self-start mt-2 ml-4">Suggested Friends</h2>
            <FriendItem profile={<UserCircleIcon className="h-12 w-12"/>} name="John Doe" mutuals="4"/>
            <FriendItem profile={<UserCircleIcon className="h-12 w-12"/>} name="John Doe" mutuals="4"/>
            <FriendItem profile={<UserCircleIcon className="h-12 w-12"/>} name="John Doe" mutuals="4"/>
            <FriendItem profile={<UserCircleIcon className="h-12 w-12"/>} name="John Doe" mutuals="4"/>
            <FriendItem profile={<UserCircleIcon className="h-12 w-12"/>} name="John Doe" mutuals="4"/>
            <FriendItem profile={<UserCircleIcon className="h-12 w-12"/>} name="John Doe" mutuals="4"/>
        </div>
    )
}
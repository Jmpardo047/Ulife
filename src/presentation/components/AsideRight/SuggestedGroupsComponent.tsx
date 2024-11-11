import { UserGroupIcon } from "@heroicons/react/24/outline"
import { FriendItem } from "./FriendItemComponent"

export const SuggestedGroups = () => {
    return(
        <div className="flex flex-col max-h-1/3 w-full overflow-y-auto p-2 bg-surface rounded-xl sroll scrollbar-short shadow-lg">
            <h2 className="text-lg font-bold text-text self-start mt-2 ml-4">Suggested Gropus</h2>
            <FriendItem profile={<UserGroupIcon className="h-12 w-12"/>} name="Wheels Chapinero" mutuals="4"/>
            <FriendItem profile={<UserGroupIcon className="h-12 w-12"/>} name="Sistemas grupo 1" mutuals="4"/>
            <FriendItem profile={<UserGroupIcon className="h-12 w-12"/>} name="Grupo de estudio 2" mutuals="4"/>
            <FriendItem profile={<UserGroupIcon className="h-12 w-12"/>} name="Grupo de estudio 3" mutuals="4"/>
            <FriendItem profile={<UserGroupIcon className="h-12 w-12"/>} name="Grupo de estudio 4" mutuals="4"/>
            <FriendItem profile={<UserGroupIcon className="h-12 w-12"/>} name="Grupo de estudio 5" mutuals="4"/>
        </div>
    )
}
export interface Props{
    profile: any;
    name: string;
    mutuals:string;
}

export const FriendItem = ({profile, name, mutuals}:Props) => {
    return (
        <div className="flex flex-row w-full h-auto p-4 pl-5 pr-8 gap-3 rounded-xl items-center">
            {profile}
            <div className="flex flex-col items-start">
                <span className="font-bold text-lg">{name}</span>
                <span className="text-sm text-gray-50 text-opacity-50">{`${mutuals} mutual friends`}</span>
            </div>
            <span className="ml-auto text-blue-500 cursor-pointer hover:text-opacity-80">Add</span>
        </div>
    )
}
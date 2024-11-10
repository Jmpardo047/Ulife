export interface Props {
    userPhoto:any;
    userName:string;
    time:string;
}

export const FeedProfile = ({userPhoto, userName, time}:Props) => {
    return (
        <>
            <div className="w-full flex flex-row px-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={userPhoto} alt="" className="w-full h-full object-contain"/>
                </div>
                <div className="flex flex-col ml-2 items-start mr-auto">
                    <h3 className="font-bold text-sm">{userName}</h3>
                    <h2 className="font-light text-xs">{time}</h2>
                </div>
                <div className="ml-auto flex flex-row-reverse items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-8 opacity-60 cursor-pointer">
                        <path  d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 opacity-60 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
            </div>
        </>
    )
}
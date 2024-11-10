import { ChatBubbleLeftIcon, HandThumbUpIcon, HeartIcon, PaperAirplaneIcon, ShareIcon } from "@heroicons/react/24/outline"

export interface Props{
    likes:Number;
    comments:Number;
    shares:Number;
}

export const Likes = ({likes, comments, shares}:Props) => {
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-row items-center w-full px-4 py-3">
                    <div className="flex flex-row items-center gap-1">
                        <HeartIcon className="w-5 h-5"/>
                        <p className="text-sm font-extralight">{`${likes}`}</p>
                    </div>
                    <div className="flex flex-row items-center gap-6 ml-auto">
                        <p className="text-sm font-extralight">{`${comments}`} comentarios</p>
                        <p className="text-sm font-extralight">{`${shares}`} mil veces compartido</p>
                    </div>
                </div>
                <div className="px-4 my-1 mb-3 opacity-50">
                    <hr />
                </div>
                <div className="grid grid-cols-4 grid-rows-1 px-4">
                    <div className="flex flex-row gap-2 w-full py-2 h-full justify-center items-center rounded-lg cursor-pointer hover:bg-background bg-opacity-50">
                        <HandThumbUpIcon className="w-6 h-6"/>
                        <p>like</p>
                    </div>
                    <div className="flex flex-row gap-2 w-full py-2 h-full justify-center items-center rounded-lg cursor-pointer hover:bg-background bg-opacity-50">
                        <ChatBubbleLeftIcon className="w-6 h-6"/>
                        <p>comment</p>
                    </div>
                    <div className="flex flex-row gap-2 w-full py-2 h-full justify-center items-center rounded-lg cursor-pointer hover:bg-background bg-opacity-50">
                        <PaperAirplaneIcon className="w-6 h-6"/>
                        <p>send</p>
                    </div>
                    <div className="flex flex-row gap-2 w-full py-2 h-full justify-center items-center rounded-lg cursor-pointer hover:bg-background bg-opacity-50">
                        <ShareIcon className="w-6 h-6"/>
                        <p>share</p>
                    </div>
                </div>
            </div>
        </>
    )
}
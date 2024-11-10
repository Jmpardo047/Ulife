import { FeedProfile } from "./FeedProfileComponent";
import { Likes } from "./LikesComponent";

export interface Props {
    userPhoto:any;
    userName:string;
    content:any[];
    time:string;
}

export const FeedItem = ({userPhoto, userName, content, time}:Props) => {
    return (
        <div className="flex flex-col h-10 w-2/3 h-auto bg-surface pt-3 pb-3 rounded-lg shadow-lg gap-2">
            <FeedProfile 
                userPhoto = {userPhoto}
                userName = {userName}
                time = {time}
            />
            <div className="w-full mt-1 px-4">
                <p className="text-left font-medium text-sm">{content[0]}</p>
            </div>
            <div className="w-full mt-3">
                <img src={content[1]} alt=""className="w-full h-full object-contain" />
            </div>
            <Likes likes={178} comments={351} shares={2.1}/>
        </div>
    )
}
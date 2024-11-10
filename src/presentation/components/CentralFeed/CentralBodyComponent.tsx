import { UserCircleIcon } from "@heroicons/react/16/solid";
import { NewPost } from "./NewPostComponent";
import { FeedItem } from "./FeedItemComponent";

export const CentralBody = () => {
    return (
        <>
            <div className="w-full h-full rounded-3xl flex flex-col items-center justify-start gap-4">
                <NewPost logo={<UserCircleIcon className="h-14 w-14"/>}/>
                <FeedItem 
                    userPhoto={"https://s3.amazonaws.com/prod-wp-tunota/wp-content/uploads/2024/11/canguro-foto-en-el-espejo.jpg"}
                    userName="John Doe"
                    content={["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi neque harum libero adipisci velit. Nobis quos expedita culpa minima fugiat! Nostrum excepturi quam vitae deleniti eligendi similique nisi necessitatibus.","https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg"]}
                    time="6 de Noviembre a las 9:00pm"
                />
            </div>
        </>
    )
};
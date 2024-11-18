import { FeedItem } from "./FeedItemComponent"

export const CentralBodyFriends:React.FC = () => {
    return (
        <>
            <div className="w-full h-full rounded-3xl flex flex-col items-center justify-start gap-4 overflow-y-scroll sroll scrollbar-short">
                <h1 className="self-start pl-44 font-bold">Friends Posts</h1>
                <FeedItem 
                    userPhoto={"https://s3.amazonaws.com/prod-wp-tunota/wp-content/uploads/2024/11/canguro-foto-en-el-espejo.jpg"}
                    userName="John Doe"
                    content={["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi neque harum libero adipisci velit. Nobis quos expedita culpa minima fugiat! Nostrum excepturi quam vitae deleniti eligendi similique nisi necessitatibus.","https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg"]}
                    time="6 de Noviembre a las 9:00pm"
                    likes={178}
                    comments={351}
                    shares={2.1}
                />
                <FeedItem 
                    userPhoto={"https://i.pinimg.com/564x/06/75/77/067577d61fb7716e4293f781409b3565.jpg"}
                    userName="User_777"
                    content={["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi neque harum libero adipisci velit. Nobis quos expedita culpa minima fugiat! Nostrum excepturi quam vitae deleniti eligendi similique nisi necessitatibus.","https://wallpapers.com/images/hd/cool-4k-ultra-hd-nao22k6od4a4djyl.jpg"]}
                    time="hace 2 días"
                    likes={178}
                    comments={351}
                    shares={2.1}
                />
            </div>
        </>
    )
}
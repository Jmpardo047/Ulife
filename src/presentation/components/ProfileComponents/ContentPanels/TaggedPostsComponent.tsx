import { FeedItem } from "../../CentralFeed/FeedItemComponent"

export const TaggedPosts: React.FC = () => {
    return (
        <div className="flex flex-col gap-5 items-center pb-5 h-200 overflow-y-scroll sroll scrollbar-short">
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
            userPhoto={"https://s3.amazonaws.com/prod-wp-tunota/wp-content/uploads/2024/11/canguro-foto-en-el-espejo.jpg"}
            userName="John Doe"
            content={["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi neque harum libero adipisci velit. Nobis quos expedita culpa minima fugiat! Nostrum excepturi quam vitae deleniti eligendi similique nisi necessitatibus.","https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg"]}
            time="6 de Noviembre a las 9:00pm"
            likes={178}
            comments={351}
            shares={2.1}
            />
        </div>
    )
}
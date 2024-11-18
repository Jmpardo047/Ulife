import React from "react"
import { FriendCard } from "./FriendCardComponent"

export const FriendsMenu:React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-4 w-full items-center pb-5 h-150 overflow-y-scroll sroll scrollbar-short">
                <FriendCard image="https://i.pinimg.com/736x/6f/78/4b/6f784b607d8310720bf60797ae547ce7.jpg" name="vegeta777"/>
                <FriendCard image="https://i.pinimg.com/736x/6f/78/4b/6f784b607d8310720bf60797ae547ce7.jpg" name="vegeta777"/>
                <FriendCard image="https://i.pinimg.com/736x/6f/78/4b/6f784b607d8310720bf60797ae547ce7.jpg" name="vegeta777"/>
                <FriendCard image="https://i.pinimg.com/736x/6f/78/4b/6f784b607d8310720bf60797ae547ce7.jpg" name="vegeta777"/>
                <FriendCard image="https://i.pinimg.com/736x/6f/78/4b/6f784b607d8310720bf60797ae547ce7.jpg" name="vegeta777"/>
                <FriendCard image="https://i.pinimg.com/736x/6f/78/4b/6f784b607d8310720bf60797ae547ce7.jpg" name="vegeta777"/>
                <FriendCard image="https://i.pinimg.com/736x/6f/78/4b/6f784b607d8310720bf60797ae547ce7.jpg" name="vegeta777"/>
                <FriendCard image="https://i.pinimg.com/736x/6f/78/4b/6f784b607d8310720bf60797ae547ce7.jpg" name="vegeta777"/>
            </div>
        </>
    )
}
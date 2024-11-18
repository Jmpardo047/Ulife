import React from "react"

export interface Props {
    image:string;
    name:string;
}

export const FriendCard:React.FC<Props> = ({image, name}:Props) => {
    return (
        <>
            <div className="flex flex-col gap-3 w-full rounded bg-surface pb-4">
                <div className="w-full h-60 bg-error select-none">
                    <img src={image} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="flex flex-col items-start gap-3 px-3 w-full">
                    <h2 className="font-semibold text-lg">{name}</h2>
                    <div className="select-none w-full bg-yellow-600 py-1.5 bg-opacity-50 rounded-md cursor-pointer hover:bg-opacity-30">
                        <p>Ver Perfil</p>
                    </div>
                    <div className="select-none w-full bg-background py-1.5 rounded-md cursor-pointer hover:bg-opacity-50">
                        <p>Eliminar</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export interface Props {
    icon:any;
    title: string;
    color:string;
}

export const ButtonProfile = ({icon, title, color}:Props) => {
    return (
        <>
            <div className={`flex flex-row ${color} ml-auto items-center py-2 px-3 rounded-lg cursor-pointer h-fit shadow-xl hover:bg-opacity-80`}>
                {icon}
                {title}
            </div>
        </>
    )
}
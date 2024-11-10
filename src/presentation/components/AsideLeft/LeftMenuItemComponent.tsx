
export interface Props{
    logo: any;
    title: string;
    onClick: () => any;
    isSelected: boolean;
}

export const LeftMenuItem = ({logo,title, onClick, isSelected}:Props) => {
    return (
        <div className={`flex flex-row w-full h-auto p-4 pl-5 gap-5 rounded-xl items-center bg-background
        ${isSelected ? "bg-opacity-50" : "bg-surface hover:bg-background bg-opacity-50"} cursor-pointer`} 
        onClick={onClick}>
            {logo}
            <span className="text-xl font-semibold">{title}</span>
        </div>
    )
}
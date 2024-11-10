
export interface Props {
    logo: any;
}

export const NewPost = ({logo}:Props) =>{
    return(
        <>
            <div className="flex flex-col w-2/3 h-auto bg-surface pt-3 pb-3 px-4 rounded-lg shadow-lg">
                <div className="w-full flex items-center gap-2">
                    {logo}
                    <div className="w-full shadow-lg py-5 pl-7 flex cursor-pointer rounded-lg bg-gray-100 dark:bg-background hover:bg-opacity-70">
                        <span>What's on your mind, User?</span>
                    </div>
                </div>
            </div>
        </>
    )
}
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export interface Props {
    logo:any;
    title: string;
}

export const MenuItem = ({logo, title}:Props) => {
    return(
        <div className="flex cursor-pointer rounded-lg py-3 px-3 flex-row items-center gap-2 hover:bg-coverSurface">
            {logo}
            <p>{title}</p>
            <ChevronRightIcon className="w-7 h-7 ml-auto"/>
        </div>
    )
}
import { LeftMenu } from "./LeftMenuComponent";

export const AsideLeft = () => {
    return (
        <>
            <div className="w-full h-fit bg-surface rounded-xl shadow-lg flex items-start justify-center pt-4 pb-4 pl-3 pr-3">
                <LeftMenu/>
            </div>
        </>
    )
};
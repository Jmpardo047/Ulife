import { AsideLeft } from "./AsideLeft/AsideLeftComponent"
import { AsideRight } from "./AsideRight/AsideRightComponent"
import { CentralBody } from "./CentralFeed/CentralBodyComponent"

export const MainContent = () =>{

    return (
        <>
            <div className="main-content">
                <AsideLeft/>
                <CentralBody/>
                <AsideRight/>
            </div>
        </>
    )
}
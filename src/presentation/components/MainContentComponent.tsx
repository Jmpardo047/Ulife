import { AsideLeft } from "./AsideLeft/AsideLeftComponent"
import { AsideRight } from "./AsideRinght/AsideRightComponent"
import { CentralBody } from "./CentralBodyComponent"

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
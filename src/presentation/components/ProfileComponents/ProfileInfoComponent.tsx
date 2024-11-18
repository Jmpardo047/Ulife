import { AboutPanel } from "./AboutPanelComponent"
import { InfoBanner } from "./InfoBannerComponent"
import { ProfilePanelContent } from "./ProfilePanelContentComponent"

export const ProfileInfo = () => {
    return (
        <div className="w-full h-min">
            <InfoBanner userPhoto={"https://s3.amazonaws.com/prod-wp-tunota/wp-content/uploads/2024/11/canguro-foto-en-el-espejo.jpg"} userName="John Doe" friends="4 amigos"/>
            <div className="w-full profile-info-panel h-auto mt-20 gap-10 px-8">
                <AboutPanel/>
                <ProfilePanelContent/>
            </div>
        </div>
    )
}
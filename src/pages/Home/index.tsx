import PageContainer from "../../Pagecontainer"
import Services from "../../components/Services"
import ServicesSteps from "../../components/ServicesSteps"
import WelcomeBanner from "../../components/WelcomeBanner"
import Videos from "../../components/Videos"
import SocialMedia from "../../components/SocialMedia"

import Kataloq from "../../components/Kataloq"





const Home = () => {

    return (
        <PageContainer>
            <WelcomeBanner />
            <Services />
            <ServicesSteps />
            <Kataloq/>
            <Videos />
            <SocialMedia />
        </PageContainer>
    )
}

export default Home
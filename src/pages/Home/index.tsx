import PageContainer from "../../Pagecontainer"

import Services from "../../components/Services"

import ServicesSteps from "../../components/ServicesSteps"
import WelcomeBanner from "../../components/WelcomeBanner"
import Videos from "../../components/Videos"
import SocialMedia from "../../components/SocialMedia"





const Home = () => {
    return (
        <PageContainer>
            <WelcomeBanner />
            <Services />
            <ServicesSteps />
             <Videos></Videos>
            <SocialMedia/>
      

        </PageContainer>
    )
}

export default Home
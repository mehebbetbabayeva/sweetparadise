import PageContainer from "../../Pagecontainer"

import Services from "../../components/Services"

import ServicesSteps from "../../components/ServicesSteps"
import WelcomeBanner from "../../components/WelcomeBanner"



const Home = () => {
    return (
        <PageContainer>
            <WelcomeBanner />
            <Services />
            <ServicesSteps />

        </PageContainer>
    )
}

export default Home
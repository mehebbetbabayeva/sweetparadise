import PageContainer from "../../Pagecontainer"
import Services from "../../components/Services"
import ServicesSteps from "../../components/ServicesSteps"
import WelcomeBanner from "../../components/WelcomeBanner"
import Videos from "../../components/Videos"
import SocialMedia from "../../components/SocialMedia"
import KataloqCategory from "../../components/KataloqCategory"



const Home = () => {

    return (
        <PageContainer>
            <WelcomeBanner />
            <Services />
            <ServicesSteps />
            <KataloqCategory />
            <Videos />
            <SocialMedia />

        </PageContainer>
    )
}

export default Home
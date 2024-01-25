import PageContainer from "../../Pagecontainer"

import Services from "../../components/Services"

import ServicesSteps from "../../components/ServicesSteps"

import SocialMedia from "../../components/SocialMedia"



const Home = () => {
    return (
        <PageContainer>

            <Services/>

        
            <ServicesSteps />

            <SocialMedia></SocialMedia>

        </PageContainer>
    )
}

export default Home
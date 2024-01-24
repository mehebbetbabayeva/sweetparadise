import { ReactNode } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

interface IchildrenProps {
    children: ReactNode
}

const PageContainer = ({ children }: IchildrenProps) => {
    return (<>
<Header/>
        <main>
            {children}
            
        </main>
    
        <Footer/>
    </>
    )
}

export default PageContainer
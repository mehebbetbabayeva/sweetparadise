import { ReactNode } from "react"
import Header from "../components/Header"

interface IchildrenProps {
    children: ReactNode
}

const PageContainer = ({ children }: IchildrenProps) => {
    return (<>
<Header/>
        <main>
            {children}
        </main>
        
    </>
    )
}

export default PageContainer
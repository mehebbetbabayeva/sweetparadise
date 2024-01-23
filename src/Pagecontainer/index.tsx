import { ReactNode } from "react"

interface IchildrenProps {
    children: ReactNode
}

const PageContainer = ({ children }: IchildrenProps) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default PageContainer
import Navbar from '@/components/elements/Navbar'
import { ReactNode } from 'react'

const LandingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className='fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100' />
            <Navbar />
            <main className='flex min-h-screen w-full flex-col items-center justify-center py-32'>{children}</main>
        </>
    )
}

export default LandingLayout

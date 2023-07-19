import logo from '@/public/logo.svg'
import Image from 'next/image'

export default {
    logo: <div className='flex items-center justify-center'><Image alt='Convoy logo' src={logo} className='w-6 h-6' /> <span className='ml-2 text-xl font-semibold'>Convoy</span></div>,
    project: {
        link: 'https://github.com/convoypanel/website'
    }
}
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../components/logo.png'

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-3 flex justify-center flex-row md:flex-row sticky top-0 drop-shadow-xl">
            <h1 className="text-3xl font-bold text-white grid place-content-center pl-3 mb-2 md:mb-0">
                <Link href="/">Vision</Link>
            </h1>
            <Image 
                className="flex-image p-2"
                src={Logo}
                alt="Vision Logo"
                width="70"
            />
        </nav>
    )
}

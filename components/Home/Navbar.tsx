import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from '../Helper/SearchBox'

const Navbar = () => {
    return (
        <div className='h-[12vh] sticky top-0 bg-white shadow-md'>
            {/*logo*/}
            <div className='flex items-center justify-between w-[95%] md:w-4/5 h-full'>
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={140}
                        height={140}
                        className="cursor-pointer"
                    />
                </Link>

                {/*icons*/}
                <div className='flex items-center space-x-6'>
                    {/* SearchBox */}
                    <div>
                        <SearchBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import { useState } from 'react'
import Icon from "../Icon"
import classNames from 'classnames'
import Link from 'next/link'

function MobileNavbar() {

    const [isOpen, setIsOpen] = useState(false)

    const linkStyle = "font-medium cursor-pointer font-medium text-xl text-neutral-900 relative before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-500 before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100"

    return (
        <div className='px-8 py-12 relative'>

            <div className='flex items-center justify-between'>
                <Link href="/">
                    <h2 className="font-bold font-sans text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-zinc-900">Loucer Butik</h2>
                </Link>

                <div>
                    <button onClick={() => setIsOpen(true)}>
                        <Icon iconType="ai" iconName="AiOutlineMenu" iconColor="text-neutral-600 hover:text-neutral-400 transition-all" classname="text-3xl" />
                    </button>

                    <div className={classNames({
                        'animate-card w-screen h-screen absolute top-0 left-0 bg-white !z-50 px-16 py-12 transition-all': true,
                        'opacity-100 block  pointer-events-auto translate-x-0': isOpen,
                        'opacity-0 hidden pointer-events-none translate-x-full ': !isOpen
                    })}>

                        <div className='flex items-center justify-between'>
                            <div href="/">
                                <h2 className="font-bold font-sans text-3xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-zinc-900">Loucer Butik</h2>
                            </div>

                            <button onClick={() => setIsOpen(false)}>
                                <Icon iconType="ai" iconName="AiOutlineCloseCircle" iconColor="text-neutral-600 hover:text-neutral-400 transition-all" classname="text-3xl" />
                            </button>
                        </div>

                        <div className='h-[1px] w-full bg-neutral-400 rounded-lg my-8'></div>

                        <ul className="flex flex-col items-start gap-12">

                            <li className={linkStyle}>
                                Yeni Gelenler
                            </li>

                            <li className={linkStyle}>
                                Öne Çıkanlar
                            </li>


                            <li className={linkStyle}>
                                Tişört
                            </li>

                            <li className={linkStyle}>
                                Gömlek
                            </li>

                            <li className={linkStyle}>
                                Eşofman
                            </li>

                            <li className={linkStyle}>
                                Pantolon
                            </li>

                            <li className={linkStyle}>
                                Şort
                            </li>

                            <li className={linkStyle}>
                                Aksesuar
                            </li>
                        </ul>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default MobileNavbar
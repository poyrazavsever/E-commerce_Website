import Link from "next/link"
import Image from "next/image"

//data

import { linkData } from "../../categoryData"

function NavbarBottom() {

    const linkStyle = "font-medium cursor-pointer text-[10px] md:text-sm text-neutral-900 relative before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-tert-200 before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100"

    return (
        <div className="relative">
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-10">

                    <Link href="/">
                        <h2 className="text-base font-mono font-black md:text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-amber-500">Sokak Butik</h2>
                    </Link>

                    <div className="z-20">
                        <ul className="flex items-center gap-6">
                            {
                                linkData?.map((data, i) => {
                                    const bottomsData = data.bottomLinkNames
                                    console.log(bottomsData)
                                    return (
                                        <div className="group" key={i}>

                                            <Link href={data.link} className={linkStyle}>
                                                {data.linkName}
                                            </Link>

                                            {data.bottomLinks ? (
                                                <div className="absolute bg-white right-0 w-full pt-12 hidden animate-card group-hover:block">

                                                    <div className="border-t border-zinc-500">
                                                        <div className="container mx-auto flex items-start justify-between gap-16 py-12">

                                                            <div className="flex items-start gap-16">

                                                                <div className=" grid grid-cols-5 gap-y-4 gap-x-7">

                                                                    {bottomsData.map((bottomData, i) => {
                                                                        return (
                                                                            <div>
                                                                                <Link href={bottomData.bottomLink} className={linkStyle} key={i}>
                                                                                    {bottomData.bottomLinkName}
                                                                                </Link>
                                                                            </div>
                                                                        )
                                                                    })}


                                                                </div>

                                                            </div>

                                                            <div className="flex items-center ">
                                                                <Image src="/Images/navbar1.png" alt="Navbar1" height="80" width="100" />
                                                                <Image src="/Images/navbar2.png" alt="Navbar2" height="80" width="100" />
                                                                <Image src="/Images/navbar3.png" alt="Navbar3" height="80" width="100" />
                                                            </div>

                                                        </div>
                                                    </div>


                                                </div>
                                            ) : ""}

                                        </div>
                                    )
                                })
                            }

                        </ul>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default NavbarBottom
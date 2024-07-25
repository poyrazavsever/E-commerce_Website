import { useState } from "react"
import Icon from "../Icon"

function NavbarTop({ setIsLoginVisible, setIsRegisterVisible }) {

    const btnStyle = "hover:text-neutral-800 transition-all"

    return (
        <div className="container mx-auto">
            <div className="flex items-center pt-8 justify-between">

                <div className="flex items-center gap-1">
                    <Icon iconType="ai" iconName="AiFillPhone" iconColor="text-neutral-700" classname="text-xs md:text-sm" />
                    <p className="text-xs md:text-sm text-neutral-500"><span className="text-neutral-700 font-medium ">0850 7777 66 55</span> - Destek Hattı</p>
                </div>

                <div className="flex items-center gap-6">

                    <div className="flex items-center gap-1">
                        <Icon iconType="ai" iconName="AiOutlineUser" classname="text-xs" />

                        <div>
                            <span className="text-neutral-500 text-xs">
                                <button className={btnStyle} onClick={() => setIsLoginVisible(true)}>Giriş Yap</button> <span>/</span>
                                <button className={btnStyle} onClick={() => setIsRegisterVisible(true)}>Kayıt Ol</button>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 group">
                        <Icon iconType="ai" iconName="AiOutlineHeart" classname="text-xs group-hover:text-neutral-800 transition-all" />

                        <button className="text-neutral-500 text-xs group-hover:text-neutral-800 transition-all">
                            Favorilerim
                        </button>
                    </div>

                    <div className="flex items-center gap-1 group">
                        <Icon iconType="sl" iconName="SlBasket" classname="text-xs group-hover:text-neutral-800 transition-all" />

                        <button className="text-neutral-500 text-xs group-hover:text-neutral-800 transition-all">
                            Sepetim
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default NavbarTop
import { useState } from "react"
import Icon from "./Icon"
import classNames from "classnames"
import Link from "next/link"

function LoginModal({ isLoginVisible, setIsLoginVisible }) {

    const [visiblePassword, setVisiblePassword] = useState(false)
    const passwordBtn = "text-2xl absolute top-[9px] right-3"
    const lineStyle = "h-[2px] w-full rounded bg-tert-200"

    const handlePassword = (e) => {
        e.preventDefault()
        setVisiblePassword(!visiblePassword)
    }

    return (
        <div className={classNames({
            "animate-card absolute flex items-center justify-center w-screen h-screen backdrop-blur-2xl !z-50": true,
            "flex": isLoginVisible,
            "hidden": !isLoginVisible
        })}>

            <div className='h-[500px] w-[400px] bg-white border p-8 border-tert-200 rounded-sm'>

                <div className="flex w-full items-start justify-between">

                    <h2 className='text-2xl font-semibold text-tert-200'>Giriş Yap</h2>

                    <button onClick={() => setIsLoginVisible(false)}>
                        <Icon iconType="ai" iconName="AiOutlineCloseCircle" iconColor="text-tert-200" classname="text-2xl pr-8" />
                    </button>


                </div>

                <form className="flex flex-col items-start gap-4 w-full">

                    <input type="email" placeholder='E-Posta' className='w-full rounded-sm px-4 py-2 border border-neutral-300 focus:outline-none text-neutral-600 placeholder:text-neutral-400' />

                    <div className="w-full relative">
                        <input type={visiblePassword ? "text" : "password"} placeholder='Şifre' className='w-full rounded-sm px-4 py-2 border border-neutral-300 focus:outline-none text-neutral-600 placeholder:text-neutral-400' />
                        {!visiblePassword ?
                            (<button onClick={handlePassword}>
                                <Icon iconType="ai" iconName="AiOutlineEye" iconColor="text-neutral-400" classname={passwordBtn} />
                            </button>) :
                            (<button onClick={handlePassword}>
                                <Icon iconType="ai" iconName="AiOutlineEyeInvisible" iconColor="text-neutral-400" classname={passwordBtn} />
                            </button>)}
                    </div>

                    <button className="flex items-center justify-center w-full px-4 py-2 rounded-sm bg-tert-200 text-white hover:bg-tert-100 transition-all">Giriş Yap</button>

                </form>

                <div className="pt-5 flex flex-col items-start gap-3">
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-xs text-neutral-500">Şifrenizi mi unuttunuz? <Link href="/" className="font-medium  text-neutral-700">Buradan yenileyin.</Link></p>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-xs text-neutral-500">Daha önce kayıt olmadınız mı? <Link href="/" className="font-medium  text-neutral-700">Buradan kayıt olun.</Link></p>
                    </div>
                </div>

                <div className="flex items-center gap-8 mt-8">
                    <div className={lineStyle}></div>
                    <h4 className="uppercase text-lg font-medium text-tert-200 w-48">ya da</h4>
                    <div className={lineStyle}></div>
                </div>

                <div className="flex flex-col items-start gap-4 mt-5">

                    <button className="flex items-center text-sm gap-2 justify-center w-full px-4 py-2 rounded-sm bg-primary text-neutral-800 tracking-wider">
                        <Icon iconType="fc" iconName="FcGoogle" classname="text-xl" iconColor="text-neutral-600" />
                        <span>Google ile Giriş Yap</span>
                    </button>

                    <button className="flex items-center text-sm gap-2 justify-center w-full px-4 py-2 rounded-sm bg-primary text-neutral-800 tracking-wider">
                        <Icon iconType="bi" iconName="BiLogoFacebookCircle" classname="text-xl text-blue-600" iconColor="text-neutral-600" />
                        <span>Facebook ile Giriş Yap</span>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default LoginModal
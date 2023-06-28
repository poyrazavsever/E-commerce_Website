import { useState } from "react"
import Icon from "./Icon"
import classNames from "classnames"

function RegisterModal({ isRegisterVisible, setIsRegisterVisible }) {

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
            "flex": isRegisterVisible,
            "hidden": !isRegisterVisible
        })}>

            <div className='h-[500px] w-[400px] bg-white border p-8 border-tert-200 rounded-sm'>

                <div className="flex w-full items-start justify-between">

                    <h2 className='text-2xl font-semibold text-tert-200'>Kayıt Ol</h2>

                    <button onClick={() => setIsRegisterVisible(false)}>
                        <Icon iconType="ai" iconName="AiOutlineCloseCircle" iconColor="text-tert-200" classname="text-2xl pr-8" />
                    </button>


                </div>

                <form className="flex flex-col items-start gap-4 w-full">

                    <input type="text" placeholder='Ad' className='w-full rounded-sm px-4 py-2 border border-neutral-300 focus:outline-none text-neutral-600 placeholder:text-neutral-400' />

                    <input type="text" placeholder='Soyad' className='w-full rounded-sm px-4 py-2 border border-neutral-300 focus:outline-none text-neutral-600 placeholder:text-neutral-400' />

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

                <div className="flex flex-col items-start gap-1 pt-5">
                    <p className="text-xs text-neutral-500">Zaten Kayıt Yaptınız mı? <span className="font-medium underline text-neutral-700">Buradan giriş yapın.</span></p>
                </div>

            </div>

        </div>
    )
}

export default RegisterModal
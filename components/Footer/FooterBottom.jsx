import Icon from "../Icon"

function FooterBottom() {

    const linkStyle = "cursor-pointer text-xs md:text-sm text-neutral-600 relative before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-400 before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100"

    return (
        <div className="flex mobile:flex-col mobile:gap-12 items-start justify-between border-t border-neutral-300 py-8">

            <a href="/" className="desktop:hidden w-full">
                <h2 className="font-bold font-sans text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-zinc-900 mb-2">Loucer Butik</h2>
                <hr />
            </a>

            <div className='flex flex-col items-start gap-4'>
                <h4 className='text-sm md:text-base font-semibold text-neutral-800'>Size Nasıl Yardım Edebiliriz?</h4>

                <ul className='flex flex-col gap-3 items-start text-neutral-700'>
                    <li className={linkStyle}>Ana Sayfa</li>
                    <li className={linkStyle}>Üyelik</li>
                    <li className={linkStyle}>Alışveriş</li>
                    <li className={linkStyle}>Ödeme</li>
                    <li className={linkStyle}>İptal & İade</li>
                    <li className={linkStyle}>Kargo Takibi</li>
                    <li className={linkStyle}>Teslimat</li>
                </ul>

            </div>

            <div className='flex flex-col items-start gap-4'>
                <h4 className='text-sm md:text-base font-semibold text-neutral-800'>Şirketimiz</h4>

                <ul className='flex flex-col gap-3 items-start text-neutral-700'>
                    <li className={linkStyle}>Hakkında</li>
                    <li className={linkStyle}>Mağazalarımız</li>
                    <li className={linkStyle}>İş Ortakları</li>
                    <li className={linkStyle}>Kurumsal Sorumluluk</li>
                    <li className={linkStyle}>Gizlilik & Güvenlik</li>
                    <li className={linkStyle}>Müşteri Hizmetleri</li>
                    <li className={linkStyle}>Sıkça Sorulan Sorular</li>
                </ul>

            </div>

            <div className='flex flex-col items-start gap-4'>
                <h4 className='text-sm md:text-base font-semibold text-neutral-800'>Takipte Kal</h4>

                <ul className='flex flex-col gap-3 items-start text-neutral-700'>

                    <div className={`flex items-center gap-1 ${linkStyle}`}>
                        <Icon iconType="ai" iconName="AiFillInstagram" />
                        <li>Instagram</li>
                    </div>

                    <div className={`flex items-center gap-1 ${linkStyle}`}>
                        <Icon iconType="ai" iconName="AiFillFacebook" />
                        <li>Facebook</li>
                    </div>

                    <div className={`flex items-center gap-1 ${linkStyle}`}>
                        <Icon iconType="bi" iconName="BiLogoPinterest" />
                        <li>Pinterest</li>
                    </div>

                    <div className={`flex items-center gap-1 ${linkStyle}`}>
                        <Icon iconType="ai" iconName="AiFillYoutube" />
                        <li>Youtube</li>
                    </div>

                </ul>

            </div>


            <div className='flex flex-col items-start gap-4'>
                <h4 className='text-sm md:text-base font-semibold text-neutral-800'>Uygulamalarımız</h4>

                <ul className='flex flex-col gap-3 items-start text-neutral-700'>
                    <div className={`flex items-center gap-1 ${linkStyle}`}>
                        <Icon iconType="fa" iconName="FaGooglePlay" />
                        <li>Google Play</li>
                    </div>
                    <div className={`flex items-center gap-1 ${linkStyle}`}>
                        <Icon iconType="ai" iconName="AiFillApple" />
                        <li>Apple Store</li>
                    </div>
                </ul>

            </div>

        </div>
    )
}

export default FooterBottom
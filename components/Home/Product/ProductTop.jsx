import {useState} from 'react'
import Icon from "@/components/Icon"
import classNames from "classnames"

function ProductTop() {

    const [isOpen, setIsOpen] = useState(false);
    const linkStyle ="text-neutral-500 hover:text-neutral-800 transition-all"

    return (
        <>
            <div>
                <h4 className='upparcase text-2xl font-medium pb-3 w-full border-b border-neutral-200'>Yeni Gelenler</h4>
            </div>

            <div className='py-4 flex items-center justify-between'>
                <span className='text-sm text-neutral-500'>XXX Ürün</span>

                <div className='relative z-20'>
                    <button onClick={() => setIsOpen(!isOpen)} className='py-1 px-6 text-sm border border-neutral-600 rounded flex items-center gap-1 bg-neutral-50  text-neutral-600'>
                        <span>Önerilen Sıralama</span>
                        <Icon iconType="ai" iconName="AiOutlineArrowRight" iconColor="text-neutral-600" classname={classNames({
                            "text-sm transition-all": true,
                            "rotate-0": !isOpen,
                            "rotate-90": isOpen,
                        })} />
                    </button>
                    {isOpen ? (
                        <ul className='absolute bg-neutral-50 rounded py-4 px-4 inline-flex flex-col items-start gap-2 text-xs animate-card w-full'>
                            <li className={linkStyle}>
                                <button>Önerilen Sıralama</button>
                            </li>

                            <li className={linkStyle}>
                                <button>En Çok Değerlendirilenler</button>
                            </li>

                            <li className={linkStyle}>
                                <button>En Düşük Fiyat</button>
                            </li>

                            <li className={linkStyle}>
                                <button>En Yüksek Fiyat</button>
                            </li>

                            <li className={linkStyle}>
                                <button>En Yeniler</button>
                            </li>

                            <li className={linkStyle}>
                                <button>En Çok Satanlar</button>
                            </li>
                        </ul>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default ProductTop
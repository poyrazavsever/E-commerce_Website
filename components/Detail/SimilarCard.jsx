import Icon from "../Icon"
import Image from "next/image"

const SimilarCard = ({ name, price, discount, link }) => {

  return (
    <a href={`/${name}`}>

      <div className="relative">

        <Image src={link} alt="productImage" className='w-48 rounded-md' />

        <button className="absolute top-3 right-20">
          <Icon iconType="ai" iconName="AiOutlineHeart" classname="text-sm w-6 h-6 rounded-full bg-white flex items-center justify-center" />
        </button>


      </div>

      <div className="flex flex-col items-start gap-2">
        <h5 className="text-xs line-clamp-1 w-11/12 pt-2 font-medium">{name}</h5>

        <div className="flex flex-col item-start">
          <span className="text-xs text-neutral-400 line-through">{discount}</span>
          <span className="text-lg font-semibold text-tert-100">{price}</span>
        </div>

      </div>

    </a>
  )
}

export default SimilarCard
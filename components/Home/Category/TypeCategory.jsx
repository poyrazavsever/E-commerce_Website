import { useState } from "react"
import Icon from "../../Icon"
import { typeData } from "../../../categoryData"
import classNames from "classnames"

function TypeCategory() {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>

      <div className="flex flex-col items-start gap-4">

        <button className="flex items-center gap-1" onClick={() => setIsVisible(!isVisible)}>
          <Icon iconType="ai" iconName="AiOutlineArrowRight" iconColor="text-neutral-700" classname={classNames({
            "text-sm transition-all" : true,
            "rotate-0" : !isVisible,
            "rotate-90" : isVisible,
          })} />
          <span className="text-base md:text-lg font-medium text-neutral-700 uppercase">Kategoriler</span>
        </button>

        <div className={classNames({
          "flex-col items-start gap-3 animate-card" : true,
          "hidden" : !isVisible,
          "flex" : isVisible,
        })}>
          {
            typeData?.map((type) => {
              return (
                <div className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="accent-neutral-500" id={type.name}/>
                  <label key={type.name} for={type.name} className="cursor-pointer">{type.name}</label>
                </div>

              )
            })
          }
        </div>

      </div>

    </div>
  )
}

export default TypeCategory
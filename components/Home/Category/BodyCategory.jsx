import { useState } from "react"
import Icon from "../../Icon"
import { bodyData } from "../../../categoryData"
import classNames from "classnames"

function BodyCategory() {

  const [isVisible, setIsVisible] = useState(true)

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
            bodyData?.map((type) => {
              return (
                <div className="flex items-center gap-2 cursor-pointer" key={type.body}>
                  <input type="checkbox" className="accent-neutral-500" id={type.body}/>
                  <label htmlFor={type.body} className="cursor-pointer">{type.body}</label>
                </div>

              )
            })
          }
        </div>

      </div>

    </div>
  )
}

export default BodyCategory
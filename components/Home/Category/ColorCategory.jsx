import { useState } from "react"
import Icon from "../../Icon"
import { colorData } from "../../../categoryData"
import classNames from "classnames"

function ColorCategory() {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div>

            <div className="flex flex-col items-start gap-4">

                <button className="flex items-center gap-1" onClick={() => setIsVisible(!isVisible)}>
                    <Icon iconType="ai" iconName="AiOutlineArrowRight" iconColor="text-neutral-700" classname={classNames({
                        "text-sm transition-all": true,
                        "rotate-0": !isVisible,
                        "rotate-90": isVisible,
                    })} />
                    <span className="text-base md:text-lg font-medium text-neutral-700 uppercase">Renkler</span>
                </button>

                <div className={classNames({
                    "flex-col items-start gap-3 animate-card": true,
                    "hidden": !isVisible,
                    "flex": isVisible,
                })}>
                    <div className="grid grid-cols-4 gap-4">
                        {
                            colorData?.map((type, i) => {
                                return (
                                    <div key={i} className={`w-6 h-6 rounded-full cursor-pointer bg-${type.color}`}></div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ColorCategory
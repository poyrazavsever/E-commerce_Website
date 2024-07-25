import Image from "next/image"

function Upper() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-0 md:justify-between">

        <button className="group">
            <Image src="/Images/main1.jpg" alt="mainPage" width={250} height={200} className="gro group-hover:scale-110 shadow-xl group-hover:shadow-neutral-700 transition-all"/>
        </button>

        <button className="group">
            <Image src="/Images/main2.jpg" alt="mainPage" width={250} height={200} className="gro group-hover:scale-110 shadow-xl group-hover:shadow-neutral-700 transition-all"/>
        </button>

        <button className="group">
            <Image src="/Images/main3.jpg" alt="mainPage" width={250} height={200} className="gro group-hover:scale-110 shadow-xl group-hover:shadow-neutral-700 transition-all"/>
        </button>

    </div>
  )
}

export default Upper
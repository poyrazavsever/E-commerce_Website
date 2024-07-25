import Image from "next/image"
import Link from "next/link"

function Upper() {
  const imageStyle = "group group-hover:scale-110 shadow-xl group-hover:shadow-neutral-700 transition-all"
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-0 md:justify-between">

        <Link href="/man" className="group">
            <Image src="/Images/main1.jpg" alt="mainPage" width={250} height={200} className={imageStyle}/>
        </Link>

        <Link href="/woman" className="group">
            <Image src="/Images/main2.jpg" alt="mainPage" width={250} height={200} className={imageStyle}/>
        </Link>

        <Link href="/unisex" className="group">
            <Image src="/Images/main3.jpg" alt="mainPage" width={250} height={200} className={imageStyle}/>
        </Link>

    </div>
  )
}

export default Upper
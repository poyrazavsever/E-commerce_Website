import Star from "./star"

function CommentCard({name, star, comment, date}) {
  return (
    <li className="py-6 px-8 flex flex-col w-full items-start gap-4  odd:bg-primary">

        <div className="flex items-center gap-3">

            <Star star={star} />

            <p className="text-sm text-neutral-700 line-clamp-2">{comment}</p>

        </div>

        <div className="flex items-center gap-3">

            <p className="text-sm text-neutral-500">{name}</p>
            <p className="text-sm text-neutral-500">{date}</p>

        </div>


    </li>
  )
}

export default CommentCard
import { useState } from "react";

import { data } from "../../productData"
import { useRouter } from "next/router"
import CommentCard from "./CommentCard";
import Star from "./star";
import classNames from "classnames";

const Comments = () => {

    const router = useRouter()

    let commentArray = [];
    let total = 0
    let star, commentLenght

    data?.forEach((dataItem) => {
        if (dataItem.name === router.query.product) {
            dataItem.comments?.forEach((comment) => {
                commentArray.push(comment)
                total += comment.star
                star = total / commentArray.length
                commentLenght = commentArray.length
            })
        }
    })

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 4;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = commentArray.slice(firstIndex, lastIndex);
    const npage = Math.ceil(commentArray.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const changeCPage = (n) => {
        setCurrentPage(n)
    }

    return (
        <div>

            <h4 className='text-2xl font-medium text-neutral-600 mb-4'>Benzer Ürünler</h4>


            <div className="flex flex-col items-start  gap-4">

                <div className='h-[1px] w-full bg-neutral-300 rounded-full my-3'></div>

                <div className="flex items-center gap-8">

                    <div className="flex items-center gap-3">
                        <span className="text-xl text-neutral-500 font-medium">{star}</span>
                        <Star star={star} />
                    </div>
                    <span className="text-lg text-neutral-500 font-medium">{commentLenght} Yorum</span>

                </div>

                <div className='h-[1px] w-full bg-neutral-300 rounded-full my-3'></div>

            </div>

            {/* Yorumlar Kısmı  */}

            <div className="flex flex-col items-end gap-16">
                <ul className="flex flex-col items-start gap-4 animate-card w-full">
                    {
                        records?.map((commentItem) => {
                            return (
                                <CommentCard name={commentItem.name} comment={commentItem.comment} star={commentItem.star} date={commentItem.date} />
                            )
                        })
                    }
                </ul>

                <nav>
                    <ul>

                        <div className='flex items-center gap-3'>
                            {
                                numbers.map((n) => (

                                    <button className={classNames({
                                        "text-sm md:text-base font-medium": true,
                                        "text-neutral-700": currentPage !== n,
                                        "text-tert-200": currentPage === n,
                                    })} onClick={() => changeCPage(n)} key={n}>{n}</button>

                                ))
                            }
                        </div>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Comments
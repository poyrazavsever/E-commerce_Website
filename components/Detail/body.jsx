import React from 'react'
import classNames from 'classnames';

function Body({ isBody, setIsBody }) {
  return (
    <div className='flex items-start gap-3'>
      <button onClick={() => setIsBody("XS")} className={classNames({
        'w-8 h-8 text-sm flex items-center justify-center rounded border text-neutral-700': true,
        'border-neutral-400': isBody !== "XS",
        'border-tert-100': isBody === "XS",
      })}>XS</button>

      <button onClick={() => setIsBody("S")} className={classNames({
        'w-8 h-8 text-sm flex items-center justify-center rounded border text-neutral-700': true,
        'border-neutral-400': isBody !== "S",
        'border-tert-100': isBody === "S",
      })}>S</button>

      <button onClick={() => setIsBody("M")} className={classNames({
        'w-8 h-8 text-sm flex items-center justify-center rounded border text-neutral-700': true,
        'border-neutral-400': isBody !== "M",
        'border-tert-100': isBody === "M",
      })}>M</button>

      <button onClick={() => setIsBody("L")} className={classNames({
        'w-8 h-8 text-sm flex items-center justify-center rounded border text-neutral-700': true,
        'border-neutral-400': isBody !== "L",
        'border-tert-100': isBody === "L",
      })}>L</button>

      <button onClick={() => setIsBody("XL")} className={classNames({
        'w-8 h-8 text-sm flex items-center justify-center rounded border text-neutral-700': true,
        'border-neutral-400': isBody !== "XL",
        'border-tert-100': isBody === "XL",
      })}>XL</button>
    </div>
  )
}



export default Body
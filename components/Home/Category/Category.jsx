import React from 'react'
import TypeCategory from './TypeCategory'
import ColorCategory from './ColorCategory'
import BodyCategory from './BodyCategory'

function Category() {
  return (
    <div className='flex flex-col items-start gap-12 w-72 mt-4 mobile:hidden'>
        <TypeCategory />
        <ColorCategory/>
        <BodyCategory/>
    </div>
  )
}

export default Category
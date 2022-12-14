import React from 'react'
import { filter } from '../../assets/images'
import Image from 'next/image'

function FilterBtn() {
  return (
    <div
      className="lg:h-[84px] lg:w-[150px] bg-white flex justify-center items-center"
      style={{ boxShadow: '0px 4px 80px rgba(175, 173, 181, 0.2)' }}
    >
      <Image src={filter} className="w-[32px] h-[32px]" />
      <p>Filter</p>
    </div>
  )
}

export default FilterBtn

import React from 'react'
import Image from 'next/image'

function PrimaryButton({ text, onClick, icon, width }) {
  return (
    <div
      className={`max-h-14 group self-center ${
        width ? 'w-full' : 'max-w-fit'
      } ${
        icon ? 'flex' : ''
      } text-center cursor-pointer bg-primary-1 px-9 py-4 hover:bg-primary-2`}
      onClick={onClick}
    >
      <h5 className="group-hover:text-white heading text-light-white w-max">
        {text}
      </h5>
      {icon ? (
        <div className="w-6 h-full ml-4 my-auto">
          <img src={icon.src} alt={text} className="max-h-6" />
        </div>
      ) : null}
    </div>
  )
}

export default PrimaryButton

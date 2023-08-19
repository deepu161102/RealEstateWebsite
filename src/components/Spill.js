import React from 'react'

function Spill(props) {
  return (
    <div style={{
      background:props.color
    }} className='px-3 py-2 text-left text-sm bg-gray-200 bg-opacity-60 mx-1 rounded-xl cursor-pointer font-semibold'>
     
        {props.children}

    </div>
  )
}

export default Spill
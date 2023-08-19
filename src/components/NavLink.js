import React from 'react'

function NavLink(props) {
    console.log(props.active);
  return (

    <div className={props.active ? "text-base px-2 mx-2  md:mx-4 text-[#468fd1]  border-b-[3px]  border-[#468fd1] font-[550] opacity-90  ":"text-base px-2 hover:text-[#468fd1] transition delay-150 hover:border-b-[3px] mx-2 md:mx-4  border-[#468fd1] font-[550] opacity-90 "}>
        {props.children}
    </div>
  )
}

export default NavLink
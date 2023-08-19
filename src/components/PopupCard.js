import React from 'react'
import {MdOutlineKingBed} from 'react-icons/md'
import {BiBath} from 'react-icons/bi'
import {FaRuler} from 'react-icons/fa'
import Image from 'next/image'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import Bubble from './Spill'

function PopupCard({item}) {
  return (
    <div className='flex justify-start items-center rounded-4xl'>
        <div className='w-24 h-24 relative'>
            <Image src={'https://picsum.photos/id/237/200/300'} className="rounded-xl" fill objectFit='cover' />
        </div>
        <div className='pl-4'>
            <div className='flex justify-start items-center'>
                <h1 className='text-base font-semibold '>
                    $ {item.price}
                </h1>
                {item.isForSale && (
                    <h2 className='text-[0.55rem] font-semibold ml-4 text-primary'>
                    For Sale

                </h2>
                )}

            </div>
            <div className='text-[0.6rem] opacity-40 font-semibold'>
                <h1>{item.description}</h1>
            </div>
            <div className='flex justify-start mt-3 font-semibold'>
              <Bubble>
                {/* <BiBed/> */}
                <div className='flex justify-center items-center' id='text'>
                  <div className='text-[#df9034] font-black text-lg'>

                  <MdOutlineKingBed/>
                  </div>
                  <h1 className='text-xs ml-3'>{item.beds}</h1>

                </div>

              </Bubble>
              <Bubble>
                {/* <BiBed/> */}
                <div className='flex justify-center items-center' id='text'>
                  <div className='text-[#468fd1] text-lg'>

                    <BiBath/>
                  </div>
                  <h1 className='text-xs ml-3'>{item.bathroom}</h1>

                </div>

              </Bubble>
              <Bubble>
                {/* <BiBed/> */}
                <div className='flex justify-center items-center' id='text'>
                  <div className='text-[#43b4a6] text-lg'>

                  <FaRuler/>
                  </div>
                  <h1 className='text-xs ml-3'>{item.area} m</h1>

                </div>

              </Bubble>

            </div>

        </div>
    </div>
  )
}

export default PopupCard
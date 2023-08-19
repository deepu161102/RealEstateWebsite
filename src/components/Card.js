import React from 'react'
import Bubble from './Spill'
import {MdOutlineKingBed} from 'react-icons/md'
import {BiBath} from 'react-icons/bi'
import {FaRuler} from 'react-icons/fa'
import Image from 'next/image'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {Fade , Slide} from 'react-awesome-reveal'
import { useEffect, useState } from 'react'
function Card({item, index}) {
  const [onServer, setOnServer] = useState(false)

  useEffect(()=>{
    setOnServer(true)
  },[])

  return (
    <div>

<Fade delay={600} triggerOnce >
      <Slide direction='left'  delay={600}  triggerOnce>
        

      <div className='w-full shadow-lg my-2  rounded-3xl transition ease-in-out delay-[120] md:hover:-translate-y-2 md:hover:scale-105 cursor-pointer'>
          <div className='rounded-3xl h-[20vh] bg-gray-500 w-full relative' id='card-img'>
            <Image src={'https://picsum.photos/id/42/800/400'} className="rounded-3xl" fill objectFit='cover'  />

            <div className='absolute top-6 flex justify-between w-full items-start px-4'>
              <div className='flex justify-start font-semibold'>
              {index=== 0 && (
                  <Bubble color={'#54D497'}>
                    <div className='text-xs text-white'>
                    <h1>New</h1>
                  </div>
                  </Bubble>
                )}
                {item.isForSale && (
                  <Bubble color={'#468fd1'}>
                  <div className='text-xs text-white'>
                    <h1>For Sale</h1>
                  </div>
                </Bubble>
                )}
                
                
              </div>
              
              <div>
                <Bubble color={'#ffffff'}>
                  
                  <div className={item.isLiked ? `text-lg text-red-600` :'text-lg'}>
                    <BsFillSuitHeartFill/>


                  </div>
                </Bubble>
              </div>

            </div>

          </div>
          <div className='p-4' id='card-text'>
              <div>
                  <h1 className='text-2xl font-bold'>$ {item.price}</h1>
                  <p className='text-base opacity-40'>{item.description}</p>

              </div>

              <div className='flex justify-start mt-3 font-semibold'>
                <Bubble>
                  {/* <BiBed/> */}
                  <div className='flex justify-center items-center' id='text'>
                    <div className='text-[#df9034] font-black text-lg'>

                    <MdOutlineKingBed/>
                    </div>
                    <h1 className='text-sm ml-3'>{item.beds}</h1>

                  </div>

                </Bubble>
                <Bubble>
                  {/* <BiBed/> */}
                  <div className='flex justify-center items-center' id='text'>
                    <div className='text-[#468fd1] text-lg'>

                      <BiBath/>
                    </div>
                    <h1 className='text-sm ml-3'>{item.bathroom}</h1>

                  </div>

                </Bubble>
                <Bubble>
                  {/* <BiBed/> */}
                  <div className='flex justify-center items-center' id='text'>
                    <div className='text-[#43b4a6] text-lg'>

                    <FaRuler/>
                    </div>
                    <h1 className='text-sm ml-3'>{item.area} m</h1>

                  </div>

                </Bubble>

              </div>


          </div>
      </div>
      </Slide>
    </Fade>
    </div>
    
  )
}

export default Card
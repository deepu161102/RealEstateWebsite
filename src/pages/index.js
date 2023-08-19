import Bubble from "@/components/Spill";
import Card from "@/components/Card";
import MapBox from "@/components/MapBox";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import fetchProperties from "@/utils/fetchProperties";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ properties }) {
  const cardPerRow = 4;
  const [next, setNext] = useState(cardPerRow);
  const hadndleMoreCards = () => {
    setNext(next + cardPerRow);
  };
  return (
    <>
      <Navbar active={0} />
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-2 mt-6 px-3">
        <div className="lg:col-span-2 px-2 md:px-0">
        <SearchBox />

        </div>
        <div className="mx-2 hidden lg:block">
          <Bubble>
            <div className="my-1 flex justify-center items-center">
              <h1 className=" opacity-90 text-xs">For Sale</h1>
              <div className=" text-xl">
                <FiChevronDown />
              </div>
            </div>
          </Bubble>
        </div>
        <div className="mx-2 hidden lg:block">
          <Bubble>
            <div className="my-1 flex justify-center items-center">
              <h1 className=" opacity-90 text-xs">Type : House</h1>
              <div className=" text-xl">
                <FiChevronDown />
              </div>
            </div>
          </Bubble>
        </div>
        <div className="mx-2 hidden lg:block">
          <Bubble>
            <div className="my-1 flex justify-center items-center">
              <h1 className=" opacity-90 text-xs">Min Price : $500k</h1>
              <div className=" text-xl">
                <FiChevronDown />
              </div>
            </div>
          </Bubble>
        </div>
        <div className="mx-2 hidden lg:block">
          <Bubble>
            <div className="my-1 flex justify-center items-center">
              <h1 className=" opacity-90 text-xs">Max Price : $700k</h1>
              <div className=" text-xl">
                <FiChevronDown />
              </div>
            </div>
          </Bubble>
        </div>
        <div className="mx-2 hidden lg:block">
          <Bubble>
            <div className="my-1 flex justify-center items-center">
              <h1 className=" opacity-90 text-xs">Floor Area : 600m</h1>
              <div className=" text-xl">
                <FiChevronDown />
              </div>
            </div>
          </Bubble>
        </div>
        <div className="mx-2 hidden lg:block">
          <Bubble>
            <div className="my-1 flex justify-center items-center ">
              <div className="mx-2 rotate-90 text-xl">
                <GoSettings />
              </div>
              <h1 className="mx-3 opacity-90">More</h1>
            </div>
          </Bubble>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2   w-full px-4 py-8   ">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  w-full px-2 py-6">
            {properties.slice(0, next)?.map((item, index) => {
              return (
                <div key={index}>
                  <Card item={item} index={index} />
                </div>
              );
            })}
          </div>
          {next < properties?.length && (
          
            <div className="flex justify-center mb-4">
              <div onClick={hadndleMoreCards}>

                <Bubble>
                  <div className="flex justify-center font-semibold opacity-90 items-center my-1">
                    <BsThreeDots />
                    <h1 className="text-sm ml-2 font-semibold opacity-90 mr-2">
                      {" "}
                      Load More
                    </h1>
                  </div>
                </Bubble>
              </div>
            </div>
        )}
        </div>
        <div className=" w-full">
          <MapBox properties={properties} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const resp = await fetchProperties();
  let properties = resp;
  // console.log({resp});
  return {
    props: {
      properties,
    },
    revalidate:10
   
  };
};

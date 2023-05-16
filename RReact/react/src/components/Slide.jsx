import React, { useState } from 'react'
import dataBase from '../dataBase/dataBase';

export default function Slide() {
    const [slide,setSlide] = useState(0)
    let arr = []
    dataBase?.map((value) => {
        arr.push(value)
    })
    function handleRight(){
        slide != 2 ? setSlide(slide+1) : setSlide(0)
    }
    function handleLeft(){
        slide != 0 ? setSlide(slide-1) : setSlide(arr.length-1)

    }
  return (
    <div className='flex justify-center items-center w-[full] h-screen'>
        <button onClick={handleLeft}>LEFT</button>
        <div className='w-[200px] h-[200px] '>
            <img className='w-[200px] h-[200px] ' src={arr[slide].image} alt="" />
        </div>
        <button onClick={handleRight}>RIGHT</button>
    </div>
  )
}

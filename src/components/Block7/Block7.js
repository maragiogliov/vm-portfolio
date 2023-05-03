import React from 'react'
import './Block7.css';
import { ReactComponent as TITLE } from '../../assets/TITLE.svg';


const botellaEnMano = new URL ("../../assets/BOTELLA EN MANO.jpg",import.meta.url)
const trailer = new URL ("../../assets/TRAILER.jpg", import.meta.url)
const trailerDay = new URL ("../../assets/TRAILER DAY.jpg", import.meta.url)

const olivesBucket = new URL ("../../assets/OLIVES 2022.png",import.meta.url)
const bio = new URL ("../../assets/BIO.png",import.meta.url)
const igp = new URL ("../../assets/IGP.png",import.meta.url)
const fico = new URL ("../../assets/FICO DI INDIA.png",import.meta.url)


export default function Block7() {
  return (
      <>
  <section class="overflow-hidden text-gray-700">
    <div class="container">
      <div class=" bg-black-300 flex flex-wrap lg:w-1/2 ">
  

        <div class=" bg-black  flex flex-wrap w-1/2 ">
        <div class="w-full h-1/2 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={ botellaEnMano} />
          </div>
          <div class="w-full h-1/2 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={fico} />
          </div>
          
         
    
        </div>
      
        <div class=" bg-black flex flex-wrap w-1/2">
          <div class="w-full h-1/3 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={ olivesBucket} />
          </div>
          <div class="w-full h-1/3 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={bio} />
          </div>
          <div class="w-full h-1/3 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={ igp} />
          </div>
       
        </div>
      </div>
    </div>
</section>
      </>
    )
  }
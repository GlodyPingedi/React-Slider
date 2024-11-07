import React from 'react'
import { useState, useEffect } from 'react'
import './Slider.css'
import arrowLeft from '../../assets/left-arrow.svg'
import arrowRight from '../../assets/right-arrow.svg'
import SliderData from '../../data/SliderData'

export default function Slider () {
  const [sliderIndex, setSliderIndex] = useState(1)

  function toggleImage (direction) {
    // setSliderIndex(prevIndex => prevIndex + direction)
    // let newState;
    // if (direction + sliderIndex > SliderData.length) {
    //   newState = 1
    // } else if (direction + sliderIndex < 1) {
    //   newState = SliderData.length
    // } else {
    //   newState = sliderIndex + direction
    // }
    // setSliderIndex(newState)

    setSliderIndex(state => {
      if (direction + state > SliderData.length) {
        return 1
      } else if (direction + state < 1) {
        return SliderData.length
      } else {
        return state + direction
      }
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      toggleImage(1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <p className='index-info'>
        {sliderIndex} / {SliderData.length}
      </p>
      <div className='slider'>
        <p className='image-info'>
          {SliderData.find(item => item.id === sliderIndex)?.description}
        </p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt='bedroom'
          className='slider-img'
        />
        <button
          onClick={() => toggleImage(-1)}
          className='navigation-button prev-button'
        >
          <img src={arrowLeft} alt='' />
        </button>
        <button
          onClick={() => toggleImage(1)}
          className='navigation-button next-button'
        >
          <img src={arrowRight} alt='' />
        </button>
      </div>
    </>
  )
}

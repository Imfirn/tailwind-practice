import React from 'react'
import ImageEgg from"../images/egg.jpg"
import ImageEgg2 from"../images/egg-2.jpg"
function Content() {
  return (
      <>
    <div className='menu-card' >
        <img src={ImageEgg} alt="egg" className='h-full rounded mb-20 shadow'></img>
    <div className='center-content'>
        <h2 className='text-2xl mb-2'>Egg Muffins</h2>
        <p className='mb-2'>Crispy, delicious, and nutritious</p>
        <span>$16</span>
    </div>
    </div>
    <div className='menu-card' >
        <img src={ImageEgg2} alt="egg" className='h-full rounded mb-20 shadow'></img>
    <div className='center-content'>
        <h2 className='text-2xl mb-2'>Egg Salad</h2>
        <p className='mb-2'>Light, delicious, and nutritious</p>
        <span>$18</span>
    </div>
    </div>
    </>
  )
}

export default Content
import React from 'react'
import logo from './Photo2.jpg';
const firstabout = () => {
  return (
    <>
        <div className='bg-amber-50 pt-20 pl-10 pr-10 pb-7 flex justify-content'>
            <div className='size-full'>
                <div className='text-2xl font-bold'>Punjabi Cuisine</div>
                <br/>
                Step into the world of Punjabi cuisine, where every bite is a celebration of rich flavors and vibrant spices. Punjabi food, deeply rooted in tradition and culture, is a culinary journey that satisfies both the stomach and the soul. From the iconic buttery and creamy Dal Makhani to the fiery and flavorful Tandoori Chicken, Punjabi dishes offer a diverse range of tastes and textures that leave a lasting impression.<br/>
                <br/>
                The essence of Punjabi cuisine lies in its hearty and robust dishes, often cooked with ghee, butter, and an array of aromatic spices like cumin, coriander, and garam masala. Vegetarian delights such as Chole Bhature and Sarson da Saag with Makki di Roti showcase the region's love for bold flavors and wholesome ingredients.<br/>
                
                Whether you're indulging in a comforting bowl of Rajma Chawal or relishing the crispy and spicy flavors of Amritsari Fish, Punjabi food is a true feast for the senses. So, immerse yourself in the warmth and hospitality of Punjab through its delectable cuisine, where every meal is a flavorful celebration of life.
            </div>
            <div className='pl-6'>
                <img src={logo} alt='logo' className='h-60 w-56'/>
            </div>
        </div>
        <hr/>
    </>
  )
}

export default firstabout

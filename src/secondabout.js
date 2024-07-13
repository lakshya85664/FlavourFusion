import React from 'react'
import logo from './Photo4.jpg';

const secondabout = () => {
  return (
    <>
        <div className='bg-amber-100 pt-10 pl-10 pr-10 pb-7 flex justify-content'>
            <div className='size-full'>
                <div className='text-2xl font-bold'>Continental Cuisine</div>
                <br/>
                Step into the world of Continental cuisine, where a diverse array of flavors and culinary influences come together to create a delightful dining experience. Continental food, also known as Western cuisine, encompasses a wide range of dishes from European countries like France, Italy, and Spain, as well as influences from the Americas.

                From the creamy goodness of Italian pasta dishes like Spaghetti Carbonara to the savory French delicacy of Coq au Vin, Continental food offers a mix of hearty and refined flavors. Indulge in the buttery goodness of a perfectly cooked steak or savor the delicate flavors of a Mediterranean salad with fresh herbs and olive oil.
                <br/><br/>
                Whether you're enjoying a classic American burger with fries or treating yourself to a decadent slice of Tiramisu, Continental cuisine caters to a variety of tastes and preferences. With its emphasis on quality ingredients and culinary techniques, Continental food promises a gastronomic journey that blends tradition with innovation. So, immerse yourself in the flavors of the world with Continental cuisine, where every bite tells a story of culinary excellence and global influences.
            </div>
            <div className='pl-6'>
                <img src={logo} alt='logo' className='h-60 w-56'/>
            </div>
        </div>
        <hr/>
    </>
  )
}

export default secondabout

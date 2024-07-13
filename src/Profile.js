import React from 'react'

const Contact3 = () => {
  return (
    <div className='w-full pt-[5rem] px-4 pb-[3rem] mt-[5rem]'>
          <h3 className='font-bold text-l text-center mb-2 text-slate-500'>GET IN TOUCH</h3>
          <h1 className='font-bold text-3xl text-center mb-8'>Order Now!</h1>
    <div className='max-w-[1400px] mx-auto flex justify-center'>
        <div className='sm:w-1/2 py-[3rem] px-[3rem] bg-gradient-to-l from-amber-200 to bg-amber-100'>
      
        <form action='' className='flex flex-col space-y-8'>
            <div className='flex flex-row justify-between'>
               <input type='text' placeholder='Your Name*' required="required" className=' border border-slate-100 w-1/2 bg-[#faf9f9] mr-10'/>
               <input type='text' placeholder='Your Phone*'  required="required" className=' border border-slate-100 w-1/2 bg-[#faf9f9]'/>
            </div>
            <div className='flex flex-row justify-between'>
               <input type='text' placeholder='Email Address*'  required="required" className=' border border-slate-100 w-1/2 bg-[#faf9f9] mr-10'/>
               <select name='product' className=' border border-slate-100 w-1/2 bg-[#faf9f9]' required >
                    <option value= "">Select Meal Type*</option>
                    <option value="bp">Breakfast</option>
                    <option value='bq'>Lunch</option>
                    <option value='bcoal'>Dinner</option>
               </select>
            </div>
            <div>
               <textarea placeholder='Your Address' aria-required='true' rows={4} className='w-full border border-slate-100 bg-[#faf9f9] mr-10'></textarea>
            </div>
            <div>
                <button type='submit' className='w-full border border-slate-100 bg-gradient-to-r from-gray-600 to bg-gray-900 text-white p-3'>Send Now!</button>
            </div>
        </form>
        
            </div>
        </div>
    </div>
   
  )
}

export default Contact3
import React from "react";
import { useNavigate } from "react-router-dom";


const FirstHome = () => {
    const navigate = useNavigate()

    const goToContact= () =>
        {
            navigate("/profile")
        }
    return(
        <>
        <div className='bg-amber-50 pt-10 pl-20 pr-20 pb-10' style={{marginTop:'3rem'}}>
            <div className='size-full'>
                <p className='font-bold text-2xl text-center'>Welcome to FlavorFusion!</p>
                <p className="text-center text-xl">FlavorFusion is a vibrant culinary journey which brings you a fusion of flavours from around the world. Explore a diverse range of mouthwatering dishes, recipes, and dining experiences that will tantalize your taste buds.</p>
                <div className='flex justify-center pt-6'>
                    <button onClick={() => goToContact()} className='bg-black text-white rounded-full py-2 px-4 hover:bg-neutral-400'>Order Now</button>
                </div>  
            </div>
        </div>
        <hr/>
        </>
    )
}

export default FirstHome
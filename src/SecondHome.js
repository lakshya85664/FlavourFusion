import React from "react";
import logo from './download.png';

const SecondHome = () => {
    return(
        <>
            <div className='bg-amber-100 text-black p-12 flex justify-content'>
                <div className='size-full'>
                    <p>A culinary haven where flavors dance on your palate and aromas tantalize your senses. As you walk through the doors, you're enveloped in a symphony of scents from around the globe. The ambiance is a harmonious blend of modern elegance and cozy charm, inviting you to embark on a gastronomic adventure. Our chefs, masters of fusion cuisine, craft each dish with precision and passion, creating culinary masterpieces that delight your taste buds. From sizzling stir-fries to decadent desserts, every bite tells a story of tradition and innovation. The attentive staff ensures your dining experience is nothing short of exceptional, catering to your every need with a smile. Whether you're a connoisseur seeking new flavors or a casual diner looking for a memorable meal, FlavorFusion restaurant promises an unforgettable journey through the world of food. Welcome to a place where every meal is a celebration of taste, texture, and creativity.</p>
                </div>
                <div className='pl-5'>
                    <img src={logo} alt='logo' className='h-40 w-48'/>
                </div>
             </div>
             <hr/>
        </>
    )
}

export default SecondHome
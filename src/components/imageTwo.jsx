import React, { useContext, useState } from 'react';
import { Parallax } from 'react-parallax';
import Image from '../images/images (10).jpg'
import { StrengthContext } from '../contexts/contextProvider';


const ImageTwo = () => {
    const [strength, setStrength] = useState(300)
    const {fullPageStrength} = useContext(StrengthContext)
   
    return (
        <Parallax bgImage={Image} className='flex items-center  aspect-[2] justify-center bg-no-repeat md:m-[4rem]' strength={fullPageStrength.use?fullPageStrength.value:strength} blur={{min:-20,max:15}} >
        <div className={`w-full flex flex-col justify-center items-center  `} >
            <h1 className='heading text-white md:text-3xl font-bold'>Welcome To Image Slider With Parallax Effect</h1>
            <div className="w-[20rem] grid gap-2 bg-[#c9c9c9] p-2 rounded-md">
                <div className="flex gap-2 items-center">
                    <p>Strength</p> <input type="number" className='p-2 px-5 outline-none rounded-md flex-1 caret-black' value={strength}
                        onChange={(e) => setStrength(e.target.value)}
                    />
                </div>
               
            </div>
        </div>
    </Parallax>);
}

export default ImageTwo;

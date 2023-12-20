import React, { useContext, useState } from 'react';
import { Parallax } from 'react-parallax';
import Image from '../images/images (6).jpg'
import { StrengthContext } from '../contexts/contextProvider';

// imported parallax integration using npm i react-parallax 
// put images with the ability to change strength dynamically


const ImageOne = () => {
    const [strength, setStrength] = useState(300)
    const { fullPageStrength } = useContext(StrengthContext)
    return (
        <Parallax bgImage={Image} bgClassName='w-full bg-cover aspect-[3]' strength={fullPageStrength.use ? fullPageStrength.value : strength} blur={{ min: -15, max: 15 }}>
            <div className={`w-full flex flex-col justify-center items-center min-h-screen bg-[image:var(${Image})]  `} >
                <h1 className='heading text-white md:text-3xl font-bold'>Welcome To Image Slider With Parallax Effect</h1>
                <div className="w-[20rem] grid gap-2 bg-[#c9c9c9] p-2 rounded-md">
                    <div className="flex gap-2 items-center">
                        <p>Strength</p> <input type="number" className='p-2 px-5 outline-none rounded-md flex-1 caret-black' value={strength}
                            onChange={(e) => setStrength(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </Parallax>
    );
}

export default ImageOne;

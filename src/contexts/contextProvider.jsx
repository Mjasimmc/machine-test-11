import { createContext, useState } from "react";


export const StrengthContext = createContext(null)
// 
// Created context providing same strength througout the application 
// Merits : Minimalizing work
// provided context here itself for better understanding of working 
// we can easily manage the state using context api
export default ({ children }) => {

    const [fullPageStrength, setFullPageStrenth] = useState({
        use: false,
        value: 900
    })
    const [show, setShow] = useState(false)

    return (<StrengthContext.Provider value={{ fullPageStrength, setFullPageStrenth }}>
        {!show && <div onMouseEnter={() => setShow(true)} className="fixed right-4 top-4  bg-[#cbcbcb] gap-2 w-[2rem] h-[2rem] flex justify-center items-center rounded-full z-50">V</div>}
        {show && <div onMouseLeave={() => setShow(false)} className="fixed right-4 top-4 rounded-md bg-[#cbcbcb] grid gap-2 w-[20rem] z-50 p-2">
            <div className="flex gap-2">
                <p>Strength</p>
                <input
                    type="number"
                    value={fullPageStrength.value}
                    className='p-2 px-5 outline-none rounded-md flex-1 caret-black'
                    onChange={(e) => setFullPageStrenth({ ...fullPageStrength, value: e.target.value })}
                />
            </div>
            <div className="flex gap-2 ">
                <p>Set Full Page</p>
                <input
                    type="checkbox"
                    checked={fullPageStrength.use}
                    className='w-5'
                    onChange={(e) => setFullPageStrenth({ ...fullPageStrength, use: e.target.checked })}
                />
            </div>

        </div>}
        {children}
    </StrengthContext.Provider>)
}
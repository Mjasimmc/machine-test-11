import React from "react"
import ImageOne from "./components/ImageOne"
import ImageThree from "./components/ImageThree"
import ImageTwo from "./components/imageTwo"
import "./styles/imageOne.css"
function App() {
  return (<>
    <div className="lg:hidden w-full h-screen grid place-content-center text-white text-4xl text-center">
     <p>Minimum PX needed Is 1024</p>
     <p>We can show parallax effect on desktop windows </p>
    </div>
    <div className="max-lg:hidden w-full min-h-screen">
      <ImageOne />
      <ImageTwo />
      <ImageThree />
      <ImageOne />
      <ImageTwo />
      <ImageThree />
      <ImageOne />
      <ImageTwo />
      <ImageThree />
    </div>
  </>
  )
}

export default App

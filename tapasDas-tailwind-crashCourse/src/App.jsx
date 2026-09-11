import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-blue-500">Hello World!</h1>
      </div>
      <div className="paragraph-container bg-linear-to-r from-mint-500 from-10% via-sky-500 via-30% to-white to-90%  ">
        <p className="text-red-500 text-3xl">Tom, Jerry, & Max</p>
        <p className="text-blue-500 text-lg text-center">Tom, Jerry, & Max</p>
        <p className="text-mint-500 text-xs text-right">Tom, Jerry, & Max</p>
      </div>
      <div className="bg-red-500 min-w-40 min-h-60">tailwild is good</div>
      <div className="bg-green-500/30  text-center w-1/2 ">
        tailwild is great
      </div>
      <div className="bg-gray-500 text-white text-right m-4 p-8">
        tailwild is best
      </div>
      <br />
      {/* <div className="bg-[url('https://imgs.search.brave.com/uk8ezRGteV_6nhF806A7Uiu-evL4X-3lHr1NInxaWZg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzg1Lzk0LzQ3/LzM2MF9GXzY4NTk0/NDcwOV9jeURCS0NZ/bnNvc1dYVXNhQVJn/QzhwNG10Q0ZwVnVs/OS5qcGc')] bg-center bg-no-repeat bg-cover h-screen"></div> */}
      <div className="text-center bg-gradient-to-r from-blue-300 via-purple-500 to-pink-300">
        We are learning gradient
      </div>
      <div className="flex ">
        <div className="flex-1 border border-amber-500">First Div 1</div>
        <div className="flex-2 border border-amber-500">Second Div 2</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>First</div>
        <div>Second</div>
      </div>
      <br />
      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-2">Grid - item - 1</div>
        <div>Grid - item - 2</div>
      </div>
      <br />
      <br />
      <br />
      <div className="bg-mint-500 md:bg-green-300 lg:bg-yellow-300 xl:bg-mint-500 ">
        We are testing responsiveness!!!
      </div>
      <div className="bg-primary-300 text-custom-light font-poppins">
        We aer testing responsiveness with customization !!
      </div>
      <br />
      <div className="bg-custom-mediumLight text-custom-light font-poppins tablet:bg-amber-200 tablet:text-blue-700">
        We aer testing breakpoint responsiveness with customization !!
      </div>
    </div>
  );
}

export default App;

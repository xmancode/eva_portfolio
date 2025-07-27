import { useRef } from "react"
import Card from "../components/Card"
import { Globe } from "../components/globe";

function About() {
    const grid2Container= useRef();
  return (
      <section className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4
         md:grid-cols-6 md:auto-rows-[18rem] mt-12">
         {/* grid 1 */}
         <div className="flex items-end grid-default-color grid-1">
            <img src="/assets/coding-pov.png"
            className="absolute scale-[1.75] 
            -right-[5rem] -top-[1rem] 
            md:scale-[3] md:left-50 md:inset-y-1 lg-scale-[2.5]"/>
            <div className="z-10">
                <p className="headtext">Hi, I'm Sarath Gk</p>
                <p className="subtext"> Tech enthusiast who develop frontend and mobile apps
                    for android and ios
                </p>
            </div>
            <div className="absolute inset-x-0 pointer-evets-none
             -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" >
            </div>
         </div>
          {/* grid 2 */}
         <div className="grid-default-color grid-2">
            <div 
            ref={grid2Container}//this is for container
            className="flex items-enter justify-center w-full h-full">
                <p className="flex items-center text-5xl text-gray-500">
                    CODING IS PASSION
                </p>
                <Card
                containerRef={grid2Container}// this is for what to drag
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
            
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
             
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
             
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              
            />
                </div>
         </div>
          {/* grid 3 */}
         <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">Im From Earth and ready to worldwide </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            {/* <Globe/> */}
          </figure>
         </div>
          {/* grid 4 */}
         <div className="grid-default-color grid-4">
          <div>
            </div>
         </div>
          {/* grid 5 */}
         <div className="grid-special-color grid-5"></div>
        </div>
    </section>
  )
}

export default About

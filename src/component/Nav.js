import React from "react";
import { animateScroll as scroll } from "react-scroll";


export default function Nav () {

    const scrollToSection = (sectionId) => {
        const targetElement = document.getElementById(sectionId);

        if (targetElement) {
        console.log(`Scrolling to section ${sectionId}`);

        targetElement.scrollIntoView({
            behavior: "auto",
            block: "start", // You can adjust this based on your preference
        });
        } else {
        console.error(`Section with ID ${sectionId} not found.`);
        }
      };


    return (
        <div class="text-primary w-full fixed top-0 flex ">
            <div class="h-10  sm:h-20 w-full flex flex-row justify-between items-center ">
                 <div className="w-1/3 ml-12 flex flex-row font-bold">
                    <p className="text-md  sm:text-4xl"> Ashley </p>
                    <p className="text-xs sm:text-lg text-lg sm:text-3xl flex items-end"> toh</p>
                </div>
                <div class="hidden sm:flex flex-row space-x-8 mr-8 font-thin">
                    <button 
                        onClick={() => scrollToSection("about")}
                        class="nav-button"> 
                        About 
                    </button>

                    <button 
                        onClick={() => scrollToSection("projects")}
                        class="nav-button"> Projects </button>

                    <button
                        onClick={() => scrollToSection("experience")}
                        class="nav-button"> Experience </button>
                    <button 
                        onClick={() => scrollToSection("experience")}
                        class="nav-button"> Contact </button>
                </div>
            </div>
        </div>
    );  
}



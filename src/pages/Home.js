import React from "react";
import About from "../component/About";
import Bio from "../component/Bio";
import Experience from "../component/Experience";
import Footer from "../component/Footer";
import Projects from "../component/Projects";
export default function Home() {
    return (
        <div class="no-scrollbar h-screen scroll-smooth outline snap-y snap-mandatory text-primary overflow-y-auto ">
            <section id="about">
                <div class="w-full snap-always snap-center  "> <About/> </div>
            </section>

            <div class="w-full snap-always snap-center "> <Bio/> </div>

            <section id="projects">
                <div class="w-full snap-always snap-center"> <Projects/> </div>
            </section>

            <section id="experience">
                <div class="w-full snap-always snap-center"> <Experience/> </div>
            </section>
            {/* <div class="w-full  snap-always snap-end"> <Footer/> </div> */}
        </div>
    );
}
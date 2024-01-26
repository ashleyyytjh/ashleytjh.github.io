import { frameworks, languages } from "../projectdata/data";
import Icon from "./Icon";
import Footer from "./Footer";
export default function Experience() {

    return (
        <div class="pt-20 project-section h-screen flex flex-col items-center ">
            <div class="projects-title">
                <p class="projects-title1 flex justify-center"> My </p>
                <p class="projects-title2 flex justify-center text-2xl md:text-5xl font-bold"> Experience </p>
            </div>

            <div class="project desc pt-20 md:pt-32 flex flex-row font-bold w-4/5 h-4/5">
                <div className="space-y-4 w-1/2 flex items-center flex-col">
                    <p className=" text-lg sm:text-3xl"> Coding Languages </p>  
                    <div className="space-x-3 flex flex-row flex-wrap ">
                        {languages.map((languages,index)=> {
                            return (
                                <Icon iconName={languages} key={index}/>
                            )
                        })}
                    </div>
                </div>

                <div class="project-right space-y-4 w-1/2 flex items-center flex-col">
                    <p className="text-lg sm:text-3xl"> Frameworks </p> 
                    <div class="space-x-4 flex flex-row flex-wrap ">
                    {frameworks.map((framework,index)=> {
                                return (
                                    <Icon iconName={framework} key={index}/>
                                )
                           })}

                    </div>  
                </div>
            </div>

            <div>
             <Footer></Footer>
            </div>
        </div>


    );
}
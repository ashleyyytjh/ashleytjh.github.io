import ProjectBox from "./ProjectBox";
import { projects } from "../projectdata/data";

export default function Projects() {
    return (
        <div className=" flex items-center flex-col pt-20 overflow-y-auto snap-y snap-mandatory">
            <div className="flex items-center flex-col mb-10">
                <p class="projects-title1 "> My </p>
                <p class="projects-title2  text-2xl md:text-5xl font-bold"> Projects </p>
            </div>

            
            {projects.map((Project,index) => {
                console.log(Projects.links)
                return (
                    <div className="snap-always snap-center">
                        <ProjectBox 
                            description={Project.description} 
                            title={Project.title}
                            img={Project.img}
                            techStack={Project.techStack}
                            links={Project.links}
                            key={index}
                        ></ProjectBox>
                    </div>  
                )
            })}

        </div>
    );
}
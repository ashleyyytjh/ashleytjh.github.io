import ProjectBox from "./ProjectBox";
import { projects } from "../projectdata/data";

export default function Projects() {
    return (
        <div className=" flex items-center flex-col pt-20">
            <div className="flex items-center flex-col mb-10">
                <p class="projects-title1 "> My </p>
                <p class="projects-title2  text-2xl md:text-5xl font-bold"> Projects </p>
            </div>
          
            {projects.map((Project,index) => {
                return (
                        <ProjectBox 
                            description={Project.description} 
                            title={Project.title}
                            img={Project.img}
                            techStack={Project.techStack}
                            key={index}
                        ></ProjectBox>
                )
            })}

        </div>
    );
}
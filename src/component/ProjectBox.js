import Icon from "./Icon";

export default function ProjectBox(props) {
    console.log(props.links)
    return (
        <div className="flex flex-col items-center  space-y-8 pb-20">
            <div class=" text-lg sm:text-4xl border-b-3 font-bold text-[#2b211e]"> 
                {props.title} 
            </div>
            <div className=" flex flex-col md:flex-row justify-center md:items-start items-center md:space-x-5 w-full md:pl-10 ">
                <div class="w-3/4 sm:w-1/2 lg:pl-10 h-full">
                    <img class="rounded-xl" src={props.img}/>
                </div> 
                <div class="description-box flex flex-col md:w-1/2 space-y-8">
                    <div className="md:items-start items-center flex flex-col pt-2 md:pt-0">
                        <div className="font-bold  md:text-2xl text-base">
                            Description 
                        </div>
                        <div className="md:text-lg w-3/4 text-base pt-3">
                            {props.description}
                        </div>
                    </div>
                
                    <div className="font-bold md:text-2xl text-base h-1/2 flex flex-col items-center md:items-start lg:w-3/4">
                        Tech stack
                        <div class="flex space-x-2 flex-row flex-wrap space-y-1 md:justify-normal justify-center">
                        {props.techStack.map((iconName, index) => {
                            return (
                                <Icon key={index} iconName={iconName}></Icon>
                            )
                        })}
                        </div>
                    </div>

                    <div className="font-bold md:text-2xl text-base h-1/2 flex flex-col items-center md:items-start lg:w-3/4">
                        Links
                        <div>
                            { props.links.map((typeOfLink, index) => {
                               return(
                                <Icon key={index} iconName={typeOfLink.name} link={typeOfLink.link}/>
                               )
                            })
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      
    );
}


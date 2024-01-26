import bioImage from "../images/Untitled design (4).png";
export default function Bio () {
    return (
        <div>
             <div id="bio-section" class="pr-10 pl-10 items-center h-screen w-full pb-20 flex flex-col justify-center sm:justify-normal sm:flex-row">
                <img class="bio-pic w-3/4 sm:w-1/2 lg:w-[600px] 2xl:w-1/3 " src={bioImage}/>
                
                <div class="sm:w-2/5 flex flex-col justify-center md:text-base lg:text-lg text-sm  2xl:text-2xl">
                    <p> Hello im Ashley!</p> 
                    <p class="bio-desc2 pt-4">
                        I am currently a Sophomore at Singapore Management University studying computer science. I have a deep interest in artificial intelligence and 
                        web development. 
                        Going beyond designing buttons and websites, what excites me most about being a software engineer is being able to design and create things that have purpose and solve real problems. 
                    </p>
                    <p class="bio-desc3 pt-4">
                        I value learning more and then iterating and improving my own skills!
                    </p>
                    <p class="bio-desc3 pt-4">
                        My hobbies also include drawing and playing games with my friends!
                    </p>
                    
                </div>
            </div>
        </div>
    );
}
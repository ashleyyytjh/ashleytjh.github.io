
import barbenheimerImg from "../images/projectImages/barbenheimer.png"
import itineraryplannersImg from "../images/projectImages/itineraryplanners.png"



export const projects = [
    {
        title: "Barbenheimer",
        img: barbenheimerImg,
        description: "Barbenheimer is a movie theatre website that is designed to showcase theatre websites in a more elegant way. Integrated with a stripe payment services and ticketing logic",
        techStack:["typescript","react","nextjs","nodejs","java","figma", "materialui","stripe"],
        links : [
            {
                name: "github",
                link:"https://github.com/ashleyyytjh/barbenheimer-frontend"
            }
        ]
    },
    {
        title: "ItineraryPlanners",
        img: itineraryplannersImg,
        description: "Itineraryplanners is a travel itinerary website made to ease itinerary planning by creating a more clean and intuitive interface. Offering a user-friendly platform that transforms typical complex processes of itinerary planning ",
        techStack:["react","javascript", "figma", "tailwindcss"],
        links : [
            {
                name: "github",
                link:"https://github.com/ashleyyytjh/itineraryplanners-frontend-web"
            }
        ]
    },
]


export const languages = ["java", "javascript", "typescript","c","python","mysql"]

export const frameworks = ["react", "nextjs", "tailwindcss","stripe"]

import barbenheimerImg from "../images/projectImages/barbenheimer.png"
import itineraryplannersImg from "../images/projectImages/itineraryplanners.png"



export const projects = [
    {
        title: "Barbenheimer",
        img: barbenheimerImg,
        description: "Barbenheimer is a movie theatre website that is designed to showcase theatre websites in a more elegant way. website that encompasses a range of features. These include the ability to purchase tickets, seamless integration with Stripe for secure payments, options for selecting showtimes and seats and a built-in ticket mailer for user convenience.",
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
        description: "Itineraryplanners is a travel itinerary website made to ease travel planning by creating a more clean and intuitive interface thus empowering users to plan and organize various aspects of their trips, including activities, accommodations, flight details, and travel durations ",
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
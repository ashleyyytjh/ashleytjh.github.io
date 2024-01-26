import java from '../icons/java.svg';
import figma from '../icons/figma.svg';
import javascript from '../icons/javascript.svg';
import materialui from '../icons/material-ui.svg';
import nextjs from '../icons/nextjs.svg';
import nodejs from '../icons/nodejs.svg';
import react from '../icons/react.svg';
import tailwindcss from '../icons/tailwind-css.svg';
import typescript from '../icons/typescript.svg';
import stripe from '../icons/stripe.svg'
import linkedin from '../icons/linkedin.svg'
import github from '../icons/github.svg'
import python from '../icons/python.svg'
import mysql from '../icons/mysql.svg'
import c from '../icons/c.svg'
export default function Icon(props) {
    const icons = {
        java,
        figma,
        javascript,
        materialui,
        nextjs,
        nodejs,
        react,
        tailwindcss,
        typescript,
        stripe,
        github,
        linkedin,
        python,
        mysql,
        c
    };

    const openLink = (link) => {
        if (link != null) {
            window.open(link, '_blank');
        }
    };

    return (
        <button onClick={()=> openLink(props.link)} >
            <img className="w-10 lg:w-12" alt={props.iconName} src={icons[props.iconName]}/>
        </button>
    );

}
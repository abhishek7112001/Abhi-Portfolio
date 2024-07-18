import Link from "next/link"
import {FaGithub, FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa"


const socials =[
    {icon: <FaGithub />, path: 'https://github.com/abhishek7112001'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/abhishekkumar0711/'},
    {icon: <FaTwitter />, path: ''},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/_.a_b_h_i_s_h_e_k._07?igsh=MWdjcGp1eHdvc3AyNw=='},
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials
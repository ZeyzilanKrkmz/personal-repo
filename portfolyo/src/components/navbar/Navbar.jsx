import Siderbar from "../siderbar/Siderbar";
import "./Navbar.scss"
import {motion} from "framer-motion"

const Navbar=() =>{
    return (
        <div className="navbar">
            {/*Sidebar */}
            <Siderbar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0.,scale:0.5}} animate={{opacity:0.,scale:0.5}} transition={{duration:0.5}}></motion.span>
                <div className="social">
                    <a href="#"><img src="" alt=".\assets\img\instagram.png" /></a>
                    <a href="#"><img src="" alt=".\assets\img\linkedin.png" /></a>
                    <a href="#"><img src="" alt=".\assets\img\github.png" /></a>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
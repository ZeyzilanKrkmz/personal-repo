import "./parallax.scss";
import {motion,useScroll} from "framer-motion";

const Parallax=({type})=>{
    const ref=useRef()

    const{scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    })

    const yBg=useTransform(scrollYProgress,[0,1],["0%","500%"])






    return (
        <div className="parallax" 
        style={{background:
            type==="servisler"
            ?"linear-gradient(180deg,#66D01A,#1A0007)" 
            :"linear-gradient(180deg,#1A0007,#5E4B4B)",

        }}
        >
            <motion.h1 style={{y: yText}}>
                {type==="servisler" ? "What I do?": "What ı did?" }</motion.h1>
            <motion.div className="planets"></motion.div>
            <motion.div className="stars" style={{
                y:yBg,
                backgroundImage: `url(${
                    type==="servisler" ? "./assets/img/sparkler.png" : "./assets/img/nebula.png"})
                    `}}></motion.div>
            <motion.div  style={{x: yBg}}  className="nebula"></motion.div>
        </div>
    )
}

export default Parallax
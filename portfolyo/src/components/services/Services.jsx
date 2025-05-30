import "./services.scss";
import {motion,useInView} from "framer-motion";

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}


const Services=()=>{

    const ref=useRef()

    const isInView=useInView(ref,{margin:"-100px"})




    return (
        <motion.div 
        className="services" 
        variants={variants} 
        initial="initial" 
        //animate="animate"
        //whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
        >
            <motion.div className="textContainer"  variants={variants}>
                <p>ı focus on helping your brand grow <br/>
                 and move forward</p>
            </motion.div>
                <motion.div className="titleContainer">
                    <div className="title">
                        <img src="" alt=""/>
                        <h1>
                            <motion.b whileHower={{color:"#f5f5f5"}}>Unique</motion.b>Ideas
                        </h1>
                    </div>
                    <div className="title">
                        <h1>
                            <motion.b whileHower={{color:"#f5f5f5"}}>For your</motion.b>business.
                        </h1>
                        <button>what ı do?</button>
                    </div>
                </motion.div>
                <motion.div className="listContainer"  variants={variants}></motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Provident reiciendis ea alias dolorem consequuntur. 
                         Magnam, dolorem quos!</p>
                         <button>Go</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Provident reiciendis ea alias dolorem consequuntur. 
                         Magnam, dolorem quos!</p>
                         <button>Go</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Provident reiciendis ea alias dolorem consequuntur. 
                         Magnam, dolorem quos!</p>
                         <button>Go</button>
                    </motion.div>
                    <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Provident reiciendis ea alias dolorem consequuntur. 
                         Magnam, dolorem quos!</p>
                         <button>Go</button>
                    </motion.div>
            
        </motion.div>
    )
}
export default Services
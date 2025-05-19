import "./contact.scss";
import {motion,useInView} from "framer-motion";

const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    },
};

const Contact=()=>{

    const ref=useRef()

    const isInView=useInView(ref,{margin:"-100px"})
    return (
        <motion.div 
        ref={ref}
        className="contact" 
        variants={variants} 
        initial="initial" 
        whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Lets work together</motion.h1>
                <motion.div className="item" variants={variants}><h2>
                    Mail</h2>
                    <span>hello@react.dev</span>
            </motion.div>
            <motion.div className="item" variants={variants}><h2>
                    Address</h2>
                    <span>hello street New York</span></motion.div>
            </motion.div>
            <motion.div className="item" variants={variants}><h2>
                    Phone</h2>
                    <span>+1 234 567</span></motion.div> 
            
        <div className="formContainer">
            <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3,duration:1}}>
                <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
                    
               <motion.path
               strokeWidth={0.2}
               fill="none"
               animate= {{pathLength:0}}
               whileInView={isInView &&{pathLength:1}}
               transition= {{duration:3}}
               d=""/>

            </svg>
            <motion.form
            initial={{opacity:0}}
             whileInView={{opacity:1}} 
             transition={{delay:3,duration:1}}>
                <input type="text" required placeholder="Name"/>
                 <input type="email" required placeholder="Email"/>
                 <textarea rows={8} placeholder="Message"/>
                 <button>Submit</button>
            </motion.form>
            </motion.div>
        </div>
        </motion.div>
    );
};

export default Contact;
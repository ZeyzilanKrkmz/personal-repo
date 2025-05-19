import "./Siderbar.scss";
import {useState} from "react";
import {motion} from "framer-motion";
import Links from "./links/Links"
import ToggleButton from "./toggleButton/ToggleButton";

const Siderbar =()=>{

    const[open,setOpen]=useState(false)

    const variants={
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffnes:20,
            },
        },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:"spring",
                stiffness:400,
                damping:40,
            },
        },
    };





    return (
        <motion.div className="siderbar"
        animate={open ? "open" : "closed"}>
            <div className="bg" variants={variants}>
                <Links/>
            </div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    )
}

export default Siderbar
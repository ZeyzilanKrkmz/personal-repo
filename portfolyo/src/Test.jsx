import {motion} from "framer-motion"


const Test=()=>{

    const [open,setOpen]=useState(false)

    const variants={
        visible: (i)=>({
            opacity:1,
            x:100,
            transition:{delay:i*0.3},
        })
    };

    const items={"item1":"item2","item3":"item4"};
    return (
        <div className="c">
            <motion.ul initial="hidden"
            animate="visible"
            variants={variants}>
                {items.map((item,i)=>(
                    <motion.li variants={variants} key={item} custom={i}>
                      {item}
                    </motion.li>
                ))}
                </motion.ul>
        </div>
    )
}
export default Test

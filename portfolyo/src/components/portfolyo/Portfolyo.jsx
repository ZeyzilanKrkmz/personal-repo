import "./portfolyo.scss";
import {motion, useScroll,useSpring} from "framer-motion";

const items=[
    {id:1,
    title:"React commerce",
    img:"",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quas."
  },

  {id:2,
    title:"Next.js commerce",
    img:"",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quas."
  },

  {id:3,
    title:"JS app",
    img:"",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quas."
  },

  {id:4,
    title:"Solar system app",
    img:"",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quas."
  }
]

const Single=({item})=>{

    const ref=useRef();

    const{scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    });

    const y=useTransform(scrollYProgress,[0,1],[-300,300]);

    return (
        <section ref={ref}>
            <div className="container">
             <div className="wrapper">
                <div className="imageContainer" ref={ref}>

               
                <img src={item.img} alt=""/>
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
             </div>
            </div>
        </section>
    )
}

const Portfolyo=()=>{

    const ref=useRef()

    
    const scaleX=useSpring(scrollYProgress,
        {stiffness:100,
        damping:30,}
    );




    return (
        <div className="portfolyo">
            <motion.div style={{scaleX}} className="progress">
                <h1>Featured Works</h1>
                <div className="progressBar"></div>
            </motion.div>
            {items.map((item)=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Portfolyo;
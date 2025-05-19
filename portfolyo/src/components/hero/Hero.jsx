import "./hero.scss"

const sliderVariants ={
    initial:{
        x:0,
        
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
            staggerChildren:0.1,
        },
    },
};

const Hero=()=>{
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>ZEYNEP ZİLAN KORKMAZ</motion.h2>
                <motion.h1 variants={textVariants}>Computer Engineering Student</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See the Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me </motion.button>
                </motion.div>
            <motion.img variants={textVariants} src="./assets/images/vertical.png" animate="scrollButton" alt=""/>
            </motion.div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Writer Influencer
            </motion.div>
            </div>
            <div className="imageContainer">
               <img src="./assets/img/backgroundhero.png" alt="" /> 
            </div>
        </div>
        
    )
};

export default Hero;
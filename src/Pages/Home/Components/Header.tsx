import { motion } from "framer-motion";


const Header=()=>{
    return(
        <>
            <div className="h-[100vh] w-[98.9vw] flex flex-col gap-10 justify-center items-center  bg-gradient-to-r from-[#19191B] to-[#606373]" >
                <div>
                    <motion.p className="text-white text-7xl font-bold -tracking-tight line-clamp-6 xsm:text-xl " animate={{scale:2}} transition={{type:"just"}}  >Letz Step In</motion.p>
                </div>

                <div>
                    <motion.p className="text-white text-5xl " initial={{y:600,display:"none"}} animate={{y:0,display:"block"}} transition={{ease:"easeInOut",delay:0.6}}  >Dashboards</motion.p>
                </div>

                <div></div>
            </div>
        </>
    )
}

export default Header;